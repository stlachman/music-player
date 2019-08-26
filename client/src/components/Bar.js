import React from "react";
import styled from "styled-components";
import { FaPlay, FaForward, FaBackward } from "react-icons/fa";

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
  padding: 20px 10px;
`;

const Popup = styled.div`
  display: none;
`;

const ControlsContainer = styled.div``;

const Controls = styled.div``;

const Disc = styled.div`
  background: #000;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const Bar = () => {
  return (
    <Container>
      <MusicBar>
        <Popup />
        <ControlsContainer>
          <Disc></Disc>
          <Controls>
            <FaBackward />
            <FaPlay />
            <FaForward />
          </Controls>
        </ControlsContainer>
      </MusicBar>
    </Container>
  );
};

export default Bar;
