import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";

import { ArchiveCallBtn } from "../ArchiveCallBtn";
import { CallIList } from "../CallIList";
import { CallDetails } from "../../CallDetails";

import { CallLogsContext } from "../../../contexts/CallLogsContext";

export const ArchivedCalls = () => {
  const CallLogs = useContext(CallLogsContext);
  const totalCalls = CallLogs.archivedCalls;

  const [callIdState, setCallId] = useState("");
  const callDetailsHandler = (callId) => {
    setCallId(callId);
  };
  console.log("Inbox :>> ", CallLogs);

  const backBtnHandler = () => {
    setCallId("");
  };

  if (callIdState) {
    return <CallDetails callId={callIdState} onBackBtn={backBtnHandler} />;
  }
  console.log("ArchivedCalls :>> ", CallLogs);
  return (
    <Stack>
      <ArchiveCallBtn isArchive={false} />
      <CallIList
        callsData={totalCalls}
        callDetailsHandler={callDetailsHandler}
      />
    </Stack>
  );
};
