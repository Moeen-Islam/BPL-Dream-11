import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handelChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enough coin to purchase this player");
      return;
    }

    alert(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers,player])
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={player.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser />
            {player.playerName}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaFlag />
              <p>{player.playerCountry}</p>
            </div>

            <button className="btn">{player.playerType}</button>
          </div>
          <div className="divider"></div>

          <h2 className="font-bold">Rating ({player.rating})</h2>

          <div className="flex justify-between items-center font-bold">
            <p>{player.battingStyle}</p>
            <p className="text-right">{player.bowlingStyle}</p>
          </div>

          <div className="card-actions flex justify-between items-center">
            <p className="font-semibold">Price : ${player.price}</p>
            <button
              onClick={handelChoosePlayer}
              className="btn"
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
