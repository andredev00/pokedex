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
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => {
        const pokemons = response.data.results;
        const fetchData = async () => {
          const promises = pokemons.map((pokemon) =>
            axios.get(pokemon.url).then((response) => response.data)
          );

          console.log(promises);

          const resolvedPokemons = await Promise.all(promises);
          const sortedPokemons = resolvedPokemons.sort((a, b) => a.id - b.id);

          setPokemonList(sortedPokemons);
        };

        fetchData();
      });
  }, []);

  useEffect(() => {
    const filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemonList(filteredList);
  }, [searchTerm, pokemonList]);

  if (pokemonList.length > 0) {
    console.log(pokemonList);
    return renderPokemonCards();
  }

  function renderPokemonCards() {
    return (
      <>
        <Container className={"custom-container"}>
          <input
            className="custom-input-name"
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Row className="custom-row">
            {filteredPokemonList.map(({ id, name, sprites, types }) => (
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
