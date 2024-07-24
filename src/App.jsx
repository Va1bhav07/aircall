import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme";
import Container from "@mui/material/Container";

import Layout from "./Layout";
import { CallActivityLog } from "./Pages/CallActivityLog";
import { apiAxios } from "./utilities/axios";

const App = () => {
  useEffect(() => {
    (async () => {
      const api = "/activities";
      const resp = await apiAxios.get(api);
      console.log("resp :>> ", resp);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <div className="container"> */}
      <Container
        disableGutters
        sx={{
          width: "376px",
          height: "666px",
          zIndex: 100,
          background: "white",
          borderRadius: "3px",
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.9)",
        }}
      >
        <Layout>
          <CallActivityLog />
          {/* <div className="container-view">Some activities should be here</div> */}
        </Layout>
      </Container>
      {/* </div> */}
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App tab="home" />
  </React.StrictMode>
);
export default App;
