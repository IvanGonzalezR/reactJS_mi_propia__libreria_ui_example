import './App.css';
import React from 'react';
import { getCharacter } from './service';
import { Button, ContainerFlex, MediaImg, Text } from 'reactjs_creacion_de_librerias_ui';

function App() {

  const [ numbChar, setNumbChar ] = React.useState(1);
  const [ character, setCharacter ] = React.useState("");

  const gettingCharacter = async (character) => {
    const response = await getCharacter(character);
    setCharacter(response);
    console.log(response);
  }

  React.useEffect(() => {
    gettingCharacter(numbChar);
  }, [ numbChar ]);

  const handleIncrement = () => {
    setNumbChar(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setNumbChar(prevCount => prevCount - 1);
  };

  return (
    <div className="App">
      <ContainerFlex
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        height="100vh"
        gap="8px"
      >
        <MediaImg src={character.image} width="200px" height="200px" alt={character.name} />
        <Text component="h3" fontSize="18px" lineHeight="10px">{character.name}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.id}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.species}</Text>
        <Text component="p" fontSize="18px" lineHeight="10px">{character.status}</Text>

        <ContainerFlex
          flexDirection="row"
          justifyContent="center"
          height="40px"
          gap="8px"
          alignItems="center"
        >
          <Button
            onClick={handleDecrement}
            width="150px" height="40px"
            bgColor="lightsteelblue"
            bgColorHover="lightcoral"
          >{`< Before`}</Button>
          <Button
            onClick={handleIncrement}
            width="150px" height="40px"
            bgColor="lightsteelblue"
            bgColorHover="lightcoral"
          >
            {`Next >`}
          </Button>
        </ContainerFlex>
      </ContainerFlex>
    </div>
  );
}

export default App;
