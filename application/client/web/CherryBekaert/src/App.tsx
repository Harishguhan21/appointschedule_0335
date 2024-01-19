import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Layout from "./app/Layout/Layout";

const App = () => {
  const history = useHistory();
  console.log(history, "history777");
  const location = useLocation();

  useEffect(() => {
    // Logic to handle route changes and trigger re-render if needed
    console.log("Location changed:App", location.pathname);
  }, [location]);
  return (
    <>
      <Layout history={history} />
    </>
  );
};
export default App;
