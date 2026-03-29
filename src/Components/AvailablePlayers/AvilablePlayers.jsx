import React from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Card from "../UI/Card";

const AvilablePlayers = ({
  players,
  setCoin,
  coin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          return (
            <Card
              key={player.id}
              player={player}
              setCoin={setCoin}
              coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvilablePlayers;
