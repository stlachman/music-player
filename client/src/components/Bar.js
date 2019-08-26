import React from "react";
import styled from "styled-components";

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
    <MusicBar>
      <Popup />
      <ControlsContainer>
        <Disc></Disc>
        <Controls></Controls>
      </ControlsContainer>
    </MusicBar>
  );
};

export default Bar;
