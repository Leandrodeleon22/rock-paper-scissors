import "normalize.css";
import classes from "./App.module.css";
import paper from "./assets/images/icon-paper.svg";
import scissors from "./assets/images/icon-scissors.svg";
import rock from "./assets/images/icon-rock.svg";
import SingleIcon from "./assets/components/SingleIcon";
import RulesModal from "./assets/components/RulesModal";
import { useEffect, useState } from "react";

const choices = [
  { id: "paper", image: paper, outerColor: "paper" },
  { id: "scissors", image: scissors, outerColor: "scissors" },
  { id: "rock", image: rock, outerColor: "rock" },
];

function App() {
  // const { score } = useSelector((store) => store.choices);
  const [modalOpen, setModalOpen] = useState(true);
  const [gameStatus, setGameStatus] = useState("picking");
  const [housePicked, setHousePicked] = useState("");
  const [userPicked, setUserPicked] = useState([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const isPicking = gameStatus === "picking";
  const isPicked = gameStatus === "picked";

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // useEffect(() => {
  //   const newHousePicked
  //   getHousePick(choices);
  // }, []);

  const getHousePick = (array) => {
    const randomInteger = Math.floor(Math.random() * 3);

    return array[randomInteger];
  };

  const getUserPick = (array) => {
    return array;
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePlayAgain = () => {
    setGameStatus("picking");
    setMessage("");
    setHousePicked("");
  };

  const handleChosen = (choice) => {
    const newHousePicked = getHousePick(choices);
    const user = getUserPick(choice);

    setTimeout(() => {
      setHousePicked(newHousePicked);

      setTimeout(() => {
        let messageResult;
        let totalScore = score;

        if (user.id === newHousePicked.id) {
          messageResult = "It's a tie";
        } else if (
          (user.id === "rock" && newHousePicked.id === "scissors") ||
          (user.id === "paper" && newHousePicked.id === "rock") ||
          (user.id === "scissors" && newHousePicked.id === "paper")
        ) {
          messageResult = "You Win";
          setScore(totalScore + 1);
        } else {
          messageResult = "You Lose";

          // setScore(totalScore - 1);
        }
        if (totalScore === 0 && messageResult === "You Lose") {
          setScore(0);
        }
        setMessage(messageResult);
      }, 1200);
    }, 1000);
    setUserPicked(user);
    setGameStatus("picked");
  };

  console.log(gameStatus);
  // useEffect(() => {
  //   setTimeout(() => {
  //     getWinner(chosen.id, housePicked.id);
  //   }, 1600);
  // }, [chosen.id, housePicked.id]);

  console.log(message);
  // console.log(message);

  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <div className={classes.title}>
            <span>ROCK</span>
            <span>PAPER</span>
            <span>SCISSORS</span>
          </div>
          <div className={classes.score}>
            <span>score</span>
            <span>{score}</span>
          </div>
        </header>

        {isPicking && (
          <section className={classes.choices}>
            {choices.map((choice) => {
              return (
                <SingleIcon
                  key={choice.id}
                  id={choice.id}
                  outerColor={choice.outerColor}
                  handleChosen={handleChosen}
                  image={choice.image}
                  className={classes.choiceContainer}
                />
                // <div key={choice.id} className={classes.choiceContainer}>
                //   <button
                //     className={`${classes.button} ${classes[choice.outerColor]} `}
                //     onClick={handleChosen}
                //   >
                //     <div className={classes.choice}>
                //       <img src={choice.image} alt={choice.id} />
                //     </div>
                //   </button>
                // </div>
              );
            })}
          </section>
        )}
        {isPicked && (
          <section className={classes.picked}>
            <div className={classes.pickedContainer}>
              <p>YOU PICKED</p>
              <SingleIcon
                id={userPicked.id}
                outerColor={userPicked.outerColor}
                image={userPicked.image}
                addStyle="bigger"
              />
            </div>
            <div className={classes.resultContainer}>
              {message && (
                <div className={classes.result}>
                  <h1>{message}</h1>
                  <button onClick={handlePlayAgain}>PLAY AGAIN</button>
                </div>
              )}
            </div>

            <div className={classes.pickedContainer}>
              <p>THE HOUSE PICKED</p>
              <SingleIcon
                id={housePicked.id}
                outerColor={housePicked.outerColor}
                image={housePicked.image}
                isHousePicked="housePicked"
                housePickedData={housePicked}
                addStyle="bigger"
              />
            </div>
          </section>
        )}

        <button className={classes.rules} onClick={handleOpenModal}>
          RULES
        </button>
      </div>
      <RulesModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
