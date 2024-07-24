import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import { grey } from "@mui/material/colors";
import { CallItemCard } from "../../../components/callItemCard";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";

export const AllCals = () => {
  return (
    <Stack>
      <Box px={2}>
        <CallItemCard>
          <ArchiveOutlinedIcon />
          <Typography variant="subtitle1">Archive all calls</Typography>
        </CallItemCard>
      </Box>

      <Divider textAlign="center" sx={{ my: 1.5 }}>
        Stack
      </Divider>

      <Box px={2}>
        <CallItemCard>
          <PhoneCallbackOutlinedIcon />
          <Stack>
            <Typography variant="caption" lineHeight={1}>
              +34543543
            </Typography>
            <Typography variant="caption">tried to call on xava</Typography>
          </Stack>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ flex: 1 }}
          />
          <Typography variant="caption" fontWeight="bold">
            07:58
          </Typography>
          <Box
            border={`1px solid ${grey[300]}`}
            borderRadius=" 3px 0 0 3px"
            p={"3px"}
            borderRight={0}
          >
            <Typography fontWeight="bold" fontSize="8px">
              PM
            </Typography>
          </Box>
        </CallItemCard>
      </Box>
    </Stack>
  );
};
