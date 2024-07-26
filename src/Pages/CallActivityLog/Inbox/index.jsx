import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";

import { ArchiveCallBtn } from "../ArchiveCallBtn";
import { CallIList } from "../CallIList";

import { CallLogsContext } from "../../../contexts/CallLogsContext";
import { CallDetails } from "../../CallDetails";

export const Inbox = () => {
  const CallLogs = useContext(CallLogsContext);
  const totalCalls = CallLogs.unArchivedCalls;
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

  return (
    <Stack>
      <ArchiveCallBtn isArchive={true} />
      <CallIList
        callsData={totalCalls}
        callDetailsHandler={callDetailsHandler}
      />
    </Stack>
  );
};
