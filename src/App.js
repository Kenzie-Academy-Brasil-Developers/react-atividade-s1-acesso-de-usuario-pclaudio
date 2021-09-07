import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Cláudio";

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          login={login}
          logout={logout}
        />
      </header>
    </div>
  );
};

export default App;
