import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MusicBar = styled.div`
  max-width: 100%;
  background: #fff;
  box-shadow: 5px 11px 0 rgba(0, 0, 0, 0.5);
  width: 210px;
  padding: 10px;
`;

export const Popup = styled.div`
  display: none;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Controls = styled.div``;

export const Button = styled.button`
  display: inline-block;
  margin: 0 8px;
  border: 0;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const Disc = styled.div`
  background: #000;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;
