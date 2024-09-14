import "./App.css";
import User from "./components/User";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <h1>User Profile</h1>
      <User />
      <UserForm />
    </div>
  );
}

export default App;
