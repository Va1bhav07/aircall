import React, { useContext } from "react";
import Stack from "@mui/material/Stack";

import { UnArchivedCalls } from "./UnArchivedCalls";
import { CallIList } from "../CallIList";

import { CallLogsContext } from "../../../contexts/CallLogsContext";

export const ArchivedCalls = () => {
  const CallLogs = useContext(CallLogsContext);
  const totalCalls = CallLogs.archivedCalls;
  console.log("ArchivedCalls :>> ", CallLogs);
  return (
    <Stack>
      <UnArchivedCalls />
      <CallIList callsData={totalCalls} />
    </Stack>
  );
};
