import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // store status in local state var
  const [onlineStatus, setOnlineStatus] = useState(true);
  // console.log(`useOnlineStatus called`);
  // check if online
  useEffect(() => {
    // console.log(`eve listerner for status check`);
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // return status boolean
  return onlineStatus;
};

export default useOnlineStatus;
