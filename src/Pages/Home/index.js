import { useState, useEffect } from 'react';
import Tile from "../../Components/Tiles"
import { Body } from './styles.js';
import { data } from "../../dummydata";

const { Client } = require('podcast-api');

const client = Client({
  apiKey: process.env.REACT_APP_API_KEY
});

export default function Home() {
  const [results, setresults] = useState();
  useEffect(() => {
    client.search({
      q: 'paranormal',
      type: 'podcast',
      language: 'English'
    }).then((response) => {
      // Get response json data here
      // console.log(response.data);
      setresults(response.data)
    }).catch((error) => {
      console.log(error)
    });
  }, [])

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