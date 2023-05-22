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
// import { useNavigate } from "react-router-dom";
import "./main.css";

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setState(response.data.results);
    });
  }, []);

  console.log(state);

  const redirectToDetails = (id) => {
    // navigate("agentDetails " + id, { state: { id: id } });
  };

  return (
    <>
      {state.map(({ name, url }, index) => (
        <Card sx={{ width: "20%" }}>
          <img
            className="pokemon-img"
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              (index + 1).toString().slice(-1) +
              ".png"
            }
            id={index}
          />
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
            <Button onClick={redirectToDetails(url)} href={url} size="small">
              See more...
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
