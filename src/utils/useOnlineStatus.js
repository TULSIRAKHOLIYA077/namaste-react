import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() =>{
    window.addEventListener("offline", () =>{
      setOnlineStatus(false);
    })

    window.addEventListener("online", () =>{
      setOnlineStatus(true);
    })

  },[])
  //it's a boolean value
  return onlineStatus;
}

export default useOnlineStatus;

//in this no need argument