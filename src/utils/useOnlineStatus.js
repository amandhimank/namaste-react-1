import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [ onlineStatus, setOnlineStatus ] = useState(true);

    // check if user's online status
    // only want to add event listener one time
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;