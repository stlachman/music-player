import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaForward, FaBackward, FaPause } from "react-icons/fa";

const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MusicBar = styled.div`
  max-width: 100%;
  background: #fff;
  box-shadow: 5px 11px 0 rgba(0, 0, 0, 0.5);
  width: 210px;
  padding: 10px;
`;

const Popup = styled.div`
  display: none;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Controls = styled.div``;

const Button = styled.button`
  display: inline-block;
  margin: 0 8px;
  border: 0;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Disc = styled.div`
  background: #000;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const Bar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };
  return (
    <Container>
      <MusicBar>
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
