import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../../routes/routes";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={`/${ROUTE.SIGN_IN}`} />;
};
