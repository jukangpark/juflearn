import GlobalStyle from "./globalStyle";
import Router from "./Router";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;
