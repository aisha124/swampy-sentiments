import React, { useState, useEffect } from "react";
import axios from "axios";

const SpotifySongSelection = () => {
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/search?q=album:golden&type=album")
      .then((response) => {
        setSongs(response.data.albums.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Spotify Song Selection</h1>
      <ul>
        {songs.map((song: any, index) => (
          <li key={index}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifySongSelection;
