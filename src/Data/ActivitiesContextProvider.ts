import React, { useState } from "react";
import { ActivitiesContext, ActivitiesContextModel } from "./activities-context";

const ActivitiesContextProvider: React.FC = (props) => {

    const [ activities, setActivities ] = useState<Activity>();

    const activitiesContext: ActivitiesContextModel = {

    }
    return (
        <ActivitiesContext.Provider value={}>
            {props.children}
        <ActivitiesContext.Provider />
    );
};

export default ActivitiesContextProvider;