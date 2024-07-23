import { createRoot } from "react-dom/client";

import Header from "./Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App tab="home" />);
export default App;
