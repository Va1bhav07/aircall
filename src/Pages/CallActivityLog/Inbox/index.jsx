import React, { useContext } from "react";
import Stack from "@mui/material/Stack";

import { ArchiveCalls } from "./ArchiveCalls";
import { CallIList } from "../CallIList";

import { CallLogsContext } from "../../../contexts/CallLogsContext";

export const Inbox = () => {
  const CallLogs = useContext(CallLogsContext);
  const totalCalls = CallLogs.unArchivedCalls;
  console.log("Inbox :>> ", CallLogs);

  return (
    <Stack>
      <ArchiveCalls />
      <CallIList callsData={totalCalls} />
    </Stack>
  );
};
