import React, { useState, useEffect } from 'react';
// import SpotifySongSelection from './SpotifySongSelection';

const SongSelector = (props: { songs: any[] }) => {
  const [selectedSong, setSelectedSong] = useState<any>({});

  const handleSongSelection = (song: any) => {
    setSelectedSong(song);
  };

  return (
    <div>
      <h1>Song Selector</h1>
      {props.songs.length ? (
        <ul>
          {props.songs.map((song: any) => (
            <li key={song.id} onClick={() => handleSongSelection(song)}>
              {song.name} by {song.artist}
            </li>
          ))}
        </ul>
      ) : (
        <p>No songs available</p>
      )}
      {selectedSong.name ? (
        <div>
          <h2>Selected Song</h2>
          <p>{selectedSong.name} by {selectedSong.artist}</p>
        </div>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
};

export default SongSelector;
