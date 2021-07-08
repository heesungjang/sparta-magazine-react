import React from "react";

import { Badge } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
    const [is_read, setIsRead] = React.useState(true);
    const user_id = useSelector((state) => state.user.user.uid);
    const notiCheck = () => {
        const notiDB = realtime.ref(`noti/${user_id}`);
        notiDB.update({ read: true });
        props._onClick();
    };

    React.useEffect(() => {
        const notiDB = realtime.ref(`noti/${user_id}`);

        notiDB.on("value", (snapshot) => {
            console.log(snapshot.val());
            if (snapshot.val()) {
                setIsRead(snapshot.val().read);
            }
        });
        return () => notiDB.off();
    }, []);

    return (
        <React.Fragment>
            <Badge
                invisible={is_read}
                color="secondary"
                onClick={notiCheck}
                variant="dot"
                style={{ marginRight: "10px" }}
            >
                <Notifications />
            </Badge>
        </React.Fragment>
    );
};

NotiBadge.defaultProps = {
    _onClick: () => {},
};

export default NotiBadge;
