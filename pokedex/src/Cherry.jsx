import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function App() {
  const [state, setState] = useState([]);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/berry/").then((response) => {
      console.log(response.data.results);
      setState(response.data.results);
    });
  }, []);

  return (
    <>
      {state.map(({ name, url }) => (
        <Card sx={{ width: "20%" }}>
          <CardContent>
            {/* <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography> */}
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={url} size="small">
              See more...
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
