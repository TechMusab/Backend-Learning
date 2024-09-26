import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>First full stack app</h1>
      <h3>{jokes.length}</h3>
      {jokes.map((joke) => {
       return <div key={joke.id}>
          <h2>{joke.id}</h2>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>;
      })}
    </>
  );
}

export default App;
