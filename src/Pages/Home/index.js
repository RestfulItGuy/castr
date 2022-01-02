import Tile from "../../Components/Tiles"
import { Body } from './styles.js'

import { data } from "../../dummydata"
export default function Home() {
  return (
    <Body>
      {
        data.results.map(result => (
          <Tile
            key={result.id}
            title={result.title_original}
            publisher={result.podcast.publisher_original}
            length={result.audio_length_sec}
            thumbnail={result.thumbnail}
          />
        ))
      }
    </Body>
  )
}