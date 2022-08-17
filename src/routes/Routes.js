import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import routes from "./index";
import Login from "../pages/Login";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../redux/action-types";
import Dashboard from "../pages/Dashboard";
import Tutors from "../pages/Tutors";
import Classes from "../pages/Classes";
import Courses from "../pages/Courses";
import AddClassCourse from "../pages/AddClassCourse";
import SignUp from '../pages/Signup';



const allRoutes = [
    {
        path: routes.login,
        component: Login,
        isProtected: false,
    },
    {
        path: routes.dashboard,
        component:Dashboard,
        isProtected: true,
    },{
        path: routes.tutors,
        component:Tutors,
        isProtected: true,
    },{
        path: routes.classes,
        component:Classes,
        isProtected: true,
    },
    {
        path: routes.signup,
        component:SignUp,
    },
    {
        path: '/class/:id/view',
        component:Courses,
        isProtected: true,
    },
    {
            path: '/class/:id/course/add',
            component:AddClassCourse,
            isProtected: true,
    }
    
];
const Routes = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const userData = localStorage.getItem('userInfo');
        if(userData){
            const userInfo = JSON.parse(userData);
            dispatch({type:LOGIN_SUCCESS,payload:userInfo});
        }
    },[dispatch, props])
    return (
        <Router forceRefresh={true}>
            <Switch>
                {allRoutes.map((route, index) => (
                    <Route key={index} path={route.path} exact={true}>
                        {route.isProtected && (<RequireAuth {...props} Component={route.component} />)}
                        {!route.isProtected && (<route.component {...props} />)}
                    </Route>
                ))}
            </Switch>
        </Router>
    )
}

export default Routes