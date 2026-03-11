import {Navigate, Outlet} from "react-router-dom";

import {RootState, useAppSelector} from "@store";

export interface ProtectedRouteProps {
  redirectPath: string;
  conditionFn: (state: RootState) => boolean;
}

export const ProtectedRoute = ({redirectPath, conditionFn}: ProtectedRouteProps) => {
  const condition = useAppSelector(conditionFn);

  if (!condition) {
    return <Navigate to={redirectPath} replace/>;
  }

  return <Outlet/>;
}
