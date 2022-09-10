import React, { useEffect, useState } from "react";

export function Relogio() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    const date = new Date();
    setClockState(date.toDateString());
  }, []);

  return <div>{clockState}</div>;
}
