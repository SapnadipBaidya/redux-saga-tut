import "./App.css";
import { useEffect } from "react";
import { petIncrement, petDecrement, getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
let fetchdata=()=>{
  dispatch(getUsers());
}

  return (
    <div className="App">
      <h1>Welcome to React Redux Saga Crash Course</h1>
      <button onClick={fetchdata}>fetchdata</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user) => <h1 >{user.name}</h1>)}
    </div>
  );
}

export default App;
