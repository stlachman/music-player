import React, { useState } from "react";
import {
  Container,
  MusicBar,
  Popup,
  ControlsContainer,
  Controls,
  Button,
  Disc
} from "./styles";
import { FaPlay, FaForward, FaBackward, FaPause } from "react-icons/fa";

const Bar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };
  return (
    <Container>
      <MusicBar>
        <audio></audio>
        <Popup />
        <ControlsContainer>
          <Disc></Disc>
          <Controls>
            <Button>
              <FaBackward />
            </Button>
            <Button onClick={handleClick}>
              {isPlaying === true ? <FaPause /> : <FaPlay />}
            </Button>
            <Button>
              <FaForward />
            </Button>
          </Controls>
        </ControlsContainer>
      </MusicBar>
    </Container>
  );
};

export default Bar;
