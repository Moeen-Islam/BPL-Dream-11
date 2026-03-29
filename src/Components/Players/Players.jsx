import React, { use, useState } from "react";
import AvilablePlayers from "../AvailablePlayers/AvilablePlayers";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Players = ({ playerpromise, setCoin, coin }) => {
  const players = use(playerpromise);

  const [selected, SetSelected] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="my-15">
      <div className="flex justify-between items-center gap-3 mb-5">
        {selected === "available" ? (
          <h2 className="font-bold text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-xl">
            Selected Players ({selectedPlayers.length}/{players.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => SetSelected("available")}
            className={`btn ${selected === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => SetSelected("selected")}
            className={`btn ${selected === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div>
        {selected === "available" ? (
          <AvilablePlayers
            players={players}
            setCoin={setCoin}
            coin={coin}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
          ></AvilablePlayers>
        ) : (
          <SelectedPlayer
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
          ></SelectedPlayer>
        )}
      </div>
    </div>
  );
};

export default Players;
