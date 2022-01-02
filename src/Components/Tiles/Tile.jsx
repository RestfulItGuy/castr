import { msToTime } from "../../helpers";
import { TileContainer, TileHeader, TileImg, TileTitle, TimeDisplay } from "./styles";

export function Tile(props) {
  let runtime = msToTime(props.length)
  return (
    <TileContainer>
      <TileHeader>
        <TileImg src={props.thumbnail} />
        <TimeDisplay>{runtime}</TimeDisplay>
      </TileHeader>
      <TileTitle>{props.title}</TileTitle>
    </TileContainer>
  );
}