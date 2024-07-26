import React, { useEffect, useState, lazy, Suspense } from "react";
import { CallLogsProvider } from "./contexts/CallLogsContext";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Layout from "./Layout";
import { apiAxios } from "./utilities/axios";
import { formatDate } from "./utilities/formatDate";

const CallActivityLog = lazy(() => import("./Pages/CallActivityLog"));

const App = () => {
  const [callLogsState, setCallLogs] = useState({
    allCalls: {},
    archivedCalls: {},
    unArchivedCalls: {},
  });

  useEffect(() => {
    (async () => {
      const api = "/activities";
      const resp = await apiAxios.get(api);
      const allCallsResp = resp;
      const allCalls = {};
      const archivedCalls = {};
      const unArchivedCalls = {};

      allCallsResp.forEach((call) => {
        const date = formatDate(call.created_at);
        if (!allCalls[date]) {
          allCalls[date] = {};
        }
        if (!allCalls[date][call.from]) {
          allCalls[date][call.from] = [];
        }
        allCalls[date][call.from].push(call);
        if (call.is_archived) {
          if (!archivedCalls[date]) {
            archivedCalls[date] = {};
          }
          if (!archivedCalls[date][call.from]) {
            archivedCalls[date][call.from] = [];
          }
          archivedCalls[date][call.from].push(call);
        } else {
          if (!unArchivedCalls[date]) {
            unArchivedCalls[date] = {};
          }
          if (!unArchivedCalls[date][call.from]) {
            unArchivedCalls[date][call.from] = [];
          }
          unArchivedCalls[date][call.from].push(call);
        }
      });

      setCallLogs({
        allCalls,
        archivedCalls,
        unArchivedCalls,
      });
    })();
  }, []);

  return (
    <CallLogsProvider value={callLogsState}>
      <ThemeProvider theme={theme}>
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
            <Suspense
              fallback={
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress />
                </Box>
              }
            >
              <CallActivityLog />
            </Suspense>
          </Layout>
        </Container>
      </ThemeProvider>
    </CallLogsProvider>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;
