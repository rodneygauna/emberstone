import useUserAuth from "./hooks/auth/userAuth";
import useUserRegister from "./hooks/auth/userRegister";
import useDepartmentAdd from "./hooks/department/departmentAdd";
import useDepartmentEdit from "./hooks/department/departmentEdit";
import useStationAdd from "./hooks/stations/stationAdd";

const useAppHooks = () => {
  // Auth hooks
  const { loginUser } = useUserAuth();
  const { registerUser } = useUserRegister();
  // Settings - Department hooks
  const { addDepartment } = useDepartmentAdd();
  const { editDepartment } = useDepartmentEdit();
  // Settings - Stations hooks
  const { addStation } = useStationAdd();

  return {
    loginUser,
    registerUser,
    addDepartment,
    editDepartment,
    addStation,
  };
};

export default useAppHooks;
