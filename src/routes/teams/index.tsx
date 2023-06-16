import React from "react";
import { Outlet } from "react-router-dom";

const Teams = () => {
    return (<>
        <h2>Team Management</h2>

        <div id='management'>
            <Outlet />
        </div>
    </>);
};

export default Teams;
