import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const SelectedPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handelDeleteSelectedPlayer = (player) => {
    const filteredPlayer = selectedPlayers.filter((selectedPlayer) => {
      return selectedPlayer.playerName !== player.playerName;
    });
    console.log("filtered", filteredPlayer);
    setSelectedPlayers(filteredPlayer);
    setCoin(coin + player.price);
  };

  return (
    <div>
      {selectedPlayers.map((player, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-6 justify-between p-5 rounded-2xl border mb-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={player.image}
                alt=""
                className="h-18 w-auto rounded-md"
              />
              <div>
                <h2 className="flex items-center gap-2 font-semibold text-xl">
                  <FaRegUser />
                  {player.playerName}
                </h2>
                <p>{player.playerType}</p>
              </div>
            </div>
            <button
              className="text-red-700"
              onClick={() => handelDeleteSelectedPlayer(player)}
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayer;
