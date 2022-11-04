import React, { useEffect, useState } from "react";
import "./Game.css";
import Batman from "../assets/batman.svg";
import Cyclops from "../assets/cyclops.svg";
import Daredevil from "../assets/daredevil.svg";
import Deadpool from "../assets/deadpool.svg";
import Logan from "../assets/logan.svg";
import RoboCop from "../assets/robocop.svg";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";

const cardsImg = [
  { src: Batman, matched: false },
  { src: Cyclops, matched: false },
  { src: Daredevil, matched: false },
  { src: Deadpool, matched: false },
  { src: Logan, matched: false },
  { src: RoboCop, matched: false },
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    shuffle();
  }, []);

  useEffect(() => {
    checkCards();
  }, [firstChoice, secondChoice]);

  const shuffle = () => {
    const shuffledCards = [...cardsImg, ...cardsImg]
      .sort(() => 0.5 - Math.random())
      .map((card) => {
        return { ...card, id: Math.random() };
      });

    setCards(shuffledCards);
    setTurn(0);
    resetTurn();
  };

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);

    setTurn((prevTurn) => prevTurn + 1);
  };

  const checkCards = () => {
    if (firstChoice && secondChoice) {
      setIsDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevState) => {
          return prevState.map((card) => {
            if (firstChoice.src === card.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        cards;
      }
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setIsDisabled(false);
  };

  return (
    <div className="game">
      <p className="turn">Turns: {turn}</p>
      <div className="cards">
        {cards.map((card) => {
          return (
            <SingleCard
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              isFlipped={
                card === firstChoice || card === secondChoice || card.matched
              }
              isDisabled={isDisabled}
            />
          );
        })}
      </div>
      <div className="btn-container">
        <button className="btn" onClick={shuffle}>
          Restart
        </button>
        <button className="btn">
          <Link to={"/"}>Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default Game;
