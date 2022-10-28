import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useAuthState } from "./utilities/firebase";

import Landing from "./components/Landing";

const App = () => {
  const [user] = useAuthState();

  return <Landing user={user} />;
};

export default App;
