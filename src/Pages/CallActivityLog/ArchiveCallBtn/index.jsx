import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

import { grey } from "@mui/material/colors";

export const ArchiveCallBtn = ({ isArchive = false }) => {
  const primaryTxtColor = grey[700];

  return (
    <Box px={2}>
      <Button
        variant="outlined"
        startIcon={
          isArchive ? <ArchiveOutlinedIcon /> : <UnarchiveOutlinedIcon />
        }
        sx={{
          color: primaryTxtColor,
          backgroundColor: "common.white",
          borderRadius: "10px",
          border: `1px solid ${grey[300]}`,
          // alignItems: "center",
          justifyContent: "start",
          width: "100%",
          p: "16px",
          textTransform: "capitalize",
          "&:hover": {
            borderColor: primaryTxtColor,
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <Typography
          // variant="subtitle1"
          fontWeight="bold"
          fontSize="14px"
          color={primaryTxtColor}
        >
          {`${isArchive ? "Archive" : "Unarchive"}  all calls`}
        </Typography>
      </Button>
    </Box>
  );
};
