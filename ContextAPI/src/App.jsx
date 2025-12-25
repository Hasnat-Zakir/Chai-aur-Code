import "./App.css";
import Login1 from "./components/Login1";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>well come</h1>
      <Login1 />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
