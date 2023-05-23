import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    var array = [];

    for (let i = 1; i <= 15; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => {
        array.push(response.data);
        const sortedPokemons = array.sort((a, b) => a.id - b.id);
        setPokemonList(sortedPokemons);
      });
    }
  }, []);

  if (pokemonList.length > 0) {
    console.log(pokemonList);
    return renderPokemonCards();
  }

  function renderPokemonCards() {
    return (
      <>
        <Container>
          <Row className="custom-row">
            {pokemonList.map(({ id, name, sprites, types }) => (
              <Col className="custom-col" sm={6} md={4} lg={4} key={id}>
                <Card className="mx-auto" sx={{ width: "48%" }}>
                  <img
                    className="pokemon-img"
                    src={
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                      sprites.other.home.front_default
                        .split("sprites/pokemon/")[1]
                        .slice(0, -4) +
                      ".png"
                    }
                    id={id}
                  />
                  <CardContent>
                    <Typography
                      className="pokemon-name"
                      variant="h5"
                      component="div"
                    >
                      {name}
                    </Typography>
                    <div className="pokemon-types text-center">
                      {types.map(({ type }) => (
                        <Typography
                          className={type.name}
                          sx={{
                            fontSize: "12px",
                            display: "flex",
                            width: "70px",
                            height: "20px",
                            alignItems: "center",
                            borderRadius: "5px",
                            margin: "0 auto",
                            justifyContent: "center",
                          }}
                          variant="h5"
                          component="div"
                        >
                          {type.name}
                        </Typography>
                      ))}
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button href={"/pokemon/" + id} size="small">
                      See more...
                    </Button>
                  </CardActions>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
