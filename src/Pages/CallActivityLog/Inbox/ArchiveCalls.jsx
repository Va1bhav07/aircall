import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import { CallItemCard } from "../../../components/callItemCard";
import { grey } from "@mui/material/colors";

export const ArchiveCalls = () => {
  const primaryTxtColor = grey[700];

  return (
    <Box px={2}>
      <CallItemCard>
        <ArchiveOutlinedIcon sx={{ color: primaryTxtColor }} />
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          fontSize="14px"
          color={primaryTxtColor}
        >
          Archive all calls
        </Typography>
      </CallItemCard>
    </Box>
  );
};
