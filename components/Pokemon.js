import styled from '@emotion/styled'

const Pokemon = ({removeItemFromList, ...pokemon}) => {
    const handleOnRemove = ()=>{
        removeItemFromList && removeItemFromList(pokemon.id)
    }
  
    return (
      <PokeHolder onClick={handleOnRemove}>
        <h2>{pokemon.name}</h2>
        <ImageWrapper>
          <Image src={pokemon.sprite} />
        </ImageWrapper>
      </PokeHolder>
    );
  };
  
  const pokeData = [
    {
      name: "bulbasaur",
      height: 7,
      id: 1,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    },
    {
      name: "ivysaur",
      height: 10,
      id: 2,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    },
    {
      name: "venusaur",
      height: 20,
      id: 3,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    },
    {
      name: "charmander",
      height: 6,
      id: 4,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    },
    {
      name: "charmeleon",
      height: 11,
      id: 5,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    },
    {
      name: "charizard",
      height: 17,
      id: 6,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    },
    {
      name: "squirtle",
      height: 5,
      id: 7,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    },
    {
      name: "wartortle",
      height: 10,
      id: 8,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
    },
    {
      name: "blastoise",
      height: 16,
      id: 9,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    },
    {
      name: "caterpie",
      height: 3,
      id: 10,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
    },
  ];
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 10px;
  `;
  
  const PokeHolder = styled.div`
    text-align: center;
    color: black;
    background-color: aliceblue;
    border-color: black;
    border-radius: 20px;
  `;
  const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;
  const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
  `;
  