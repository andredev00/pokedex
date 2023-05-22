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
    var array = [];

    for (let i = 1; i <= 150; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => {
        array.push(response.data);
        setState(array);
      });
    }
  }, []);

  const redirectToDetails = (id) => {
    // navigate("agentDetails " + id, { state: { id: id } });
  };

  if (state.length > 0) {
    console.log(state);
    return teste();
  }

  function teste() {
    return (
      <>
        {state.map(({ id, name, url, sprites }) => (
          <Card sx={{ width: "25%" }}>
            <img
              className="pokemon-img"
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                sprites.other.home.front_default
                  .split("sprites/pokemon/")[1]
                  .slice(0, -4) +
                // (index + 1).toString().slice(-1) +
                ".png"
              }
              id={id}
            />
            <CardContent>
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
}
