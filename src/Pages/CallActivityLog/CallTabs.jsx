import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { AllCals } from "./AllCalls";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const CallTabs = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        transform: "translate(0px, -54px)",
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="call activity tabs"
          className="test"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "airCall.red",
            },
          }}
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "end",
            },
            "& button": {
              margin: "0 0 5px 5px",
              padding: 0,
              minWidth: "80px",
            },
          }}
        >
          <Tab
            label="inbox"
            sx={{ textTransform: "capitalize" }}
            {...a11yProps(0)}
          />
          <Tab
            label="All calls"
            sx={{ textTransform: "capitalize" }}
            {...a11yProps(1)}
          />
          <Tab icon={<TuneOutlinedIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AllCals />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};
