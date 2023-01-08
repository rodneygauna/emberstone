import csv
import re
import json

def getFedCodes():
    """
    This function is used to parse the Federal Agency Codes from the NFIRS master sheet
    It's then substituted into the data dictionary for the "data element is located in a new (separate) spreadsheet" edge case

    If more "separate sheets" are identified, identifying them will be difficult as this required human intuition to identify, but add them like this.
    """
    fedCodes = {}

    with open("Federal Agencies.csv", 'r') as feds: # This is from the WildLand Federal Agency Codes of the NFIRS master sheet
        reader = csv.reader(feds)
        for index, row in enumerate(reader):
            if index < 5:
                continue
            fedCodes[row[0]] = row[1]
    return fedCodes

def getDataDictionary():
    """
    This function is used to parse the NFIRS master sheet into a data dictionary
    It simply takes the data and loads it into a naive dictionary, no parsing is done here
    """
    moduleData = {}
    table = {}
    rows = {}
    title = ""

    with open("NFIRS_Spec_Tables_2013.csv", 'r') as spec: # This is from the Data Dictionary of the NFIRS master sheet
        reader = csv.reader(spec)
        for row in reader:
            if (row[0] == "" and row[1] == "") or ("please note" in row[1].lower()):  # Empty line
                continue
            if (row[0] != "" and row[0] != " ") and row[1] != "": # Has useful data
                rows[row[0]] = row[1]
            if "please note" in row[0].lower(): # Has a reference to another module
                continue 
            if "module; begin" in row[1].lower(): # Has module demarcation
                moduleMatch = re.match("[eE]nd(?:\sof\s|\s)(.*) [mM]odule; [bB]egin (.*) [mM]odule", row[1])
                moduleData[moduleMatch.group(1).lower()] = table
                table = {}
                continue
            if (row[0] == "" or row[0] == " ") and row[1] != "": # Has title or note
                table[title] = rows
                title = row[1].lower()
                rows = {}
        
    moduleData = processEdgeCases(moduleData)
    return moduleData

def processEdgeCases(moduleData):
        """
        This function is used to:
            process the edge cases in the NFIRS master sheet
                add identified typo corrections from the NFIRS master sheet version 2015(?)
                add the full data models for places where the NFIRS master sheet references another module
                exclude some values in the data models where it's explicitly referenced to do so (i.e. "primary" function referencing "many" as an option)
                add in the Federal Agency Codes from the NFIRS master sheet

        If more edge cases are found, they can be added here
        """
        fedCodes = getFedCodes()

        print('-'*10+'Processing edge cases'+'-'*10)
        moduleData["fire"]["mobile property make"] = moduleData["fire"]["mobile property type"]
        moduleData["apparatus/resources"] = moduleData["apparatus or resources"]
        moduleData.pop("apparatus or resources", None)
        
        print('#'*10+"Parent Modules"+'#'*10)
        for module in moduleData:
            print(module)

        print('*'*10+"Doing data model substitutions"+'*'*10)
        # With data model built, need to replace some references
        for module in moduleData:
            for table in moduleData[module]:
                for key, value in moduleData[module][table].items():
                    if key.lower() == "please note:" and ("please see the codes listed" in value.lower() or "same set that is used for" in value.lower()):
                        codeMatch = re.match(".*used for ([\w\s]*)(?:[\s-]).* in the (.*) [mM]odule(.*exception of  \?(\d*) (.*)\?|.*)", value)

                        #Make this vomit easier to read
                        tempDataSet = moduleData[codeMatch.group(2).lower().strip()][codeMatch.group(1).lower().strip()]

                        #Process some exclusion criteria (usually when a "primary" function is referencing "many" as an option)
                        if codeMatch.group(4) != None:
                            for tempKey, tempValue in tempDataSet.items():
                                if tempKey == codeMatch.group(4):
                                    tempDataSet.pop(tempKey)
                                    print("Removing entry %s from %s in module %s" % (tempKey, str(table), str(module)))

                        # Set the resulting referenced & trimmed table to the current moduleData.module.table
                        moduleData[module][table] = tempDataSet
                        print("Referencing %s from module %s" % (str(table), str(module)))

                    # Add the fed codes
                    if key.lower() == "please note:" and "data element is located in a new (separate) spreadsheet" in value.lower():
                        print("Adding in fed codes")
                        moduleData[module][table] = fedCodes

        return moduleData

def main():
    """
    A lot of work to simply parse the artisinal data dictionary csv into a procedurally acceptable json
    """
    json_object = json.dumps(getDataDictionary(), indent = 4)

    with open("data_dictionary.json", "w") as outfile:
        outfile.write(json_object)

if __name__ == "__main__":
    main()
