import useUserAuth from "./hooks/auth/userAuth";
import useUserRegister from "./hooks/auth/userRegister";
import useDepartmentAdd from "./hooks/department/departmentAdd";
import useStationAdd from "./hooks/stations/stationAdd";

const useAppHooks = () => {
  // Auth hooks
  const { loginUser } = useUserAuth();
  const { registerUser } = useUserRegister();
  // Settings - Department hooks
  const { addDepartment } = useDepartmentAdd();
  // Settings - Stations hooks
  const { addStation } = useStationAdd();

  return {
    loginUser,
    registerUser,
    addDepartment,
    addStation,
  };
};

export default useAppHooks;
