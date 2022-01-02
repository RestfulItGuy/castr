import styled from "styled-components";

export const TileContainer = styled.div`
  width: 250px;
  padding: 5px;
`

export const TileHeader = styled.div`
  display: inline-block;
  position: relative;
`

export const TimeDisplay = styled.div`
  background-color: rgba(0,0,0,.5);
  height: fit-content;
  margin-left: auto;
  margin-top: auto;

  color: white;

  position: absolute;
  right: 10px; 
  bottom: 10px;
`

export const TileImg = styled.img`
  height: 50%;
  width: 100%;
`

export const TileTitle = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`