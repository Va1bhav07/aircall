import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { apiAxios } from "../../utilities/axios";

import CircularProgress from "@mui/material/CircularProgress";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

import { CallerAvatar } from "./CallerAvatar";
import { ContactInfo } from "./ContactInfo";
import { ArchiveCall } from "./ArchiveCall";
import Snackbar from "@mui/material/Snackbar";

export const CallDetails = ({ callId, onBackBtn }) => {
  const [callDetailsState, setCallDetails] = useState({});

  useEffect(() => {
    (async () => {
      const api = `/activities/${callId}`;
      const resp = await apiAxios.get(api);
      setCallDetails(resp);
    })();
  }, [callId]);

  if (!Object.values(callDetailsState)?.length) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  const { from, is_archived } = callDetailsState;
  const backBtnHandler = () => {
    onBackBtn?.();
  };

  const archiveHandler = async () => {
    const api = `/activities/${callId}`;
    const resp = await apiAxios.patch(api, {
      is_archived: !is_archived,
    });
    console.log("resp :>> ", resp);
    if (resp === "Call had been updated.") {
      console.log("test :>> ");
      <Snackbar
        open={true}
        autoHideDuration={3000}
        message={`Number is ${!is_archived ? "archived" : "unarchived"}`}
      />;
    }

    console.log("resp :>> ", resp);
  };

  return (
    <Box>
      <IconButton
        aria-label="back"
        sx={{ position: "absolute" }}
        onClick={backBtnHandler}
      >
        <KeyboardBackspaceOutlinedIcon />
      </IconButton>

      <Stack>
        <CallerAvatar from={from} />
        <Box pt={2}>
          <ContactInfo callDetailsState={callDetailsState} />
          <Box py={3}>
            <Divider />
          </Box>
          <ArchiveCall archiveHandler={archiveHandler} />
        </Box>
      </Stack>
    </Box>
  );
};
