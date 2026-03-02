import {RootState} from "../../../store";
import {useAppSelector} from "../../../store/hooks.ts";
import {Navigate, Outlet} from "react-router-dom";

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
