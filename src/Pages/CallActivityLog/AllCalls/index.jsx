import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import { CallIList } from "../CallIList";
import { CallLogsContext } from "../../../contexts/CallLogsContext";

export const AllCalls = () => {
  const callLogs = useContext(CallLogsContext);
  const totalCalls = callLogs.allCalls;

  console.log("AllCalls :>> ", totalCalls);

  return (
    <Stack>
      <CallIList callsData={totalCalls} />
    </Stack>
  );
};
