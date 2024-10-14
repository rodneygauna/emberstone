import { departmentLoader } from "./loaders/department/departmentLoader";
import { stationLoader } from "./loaders/stations/stationLoader";

const useAppLoaders = () => {
  return {
    departmentLoader,
    stationLoader,
  };
};

export default useAppLoaders;
