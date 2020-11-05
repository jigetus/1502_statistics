import React, { useState, useEffect } from "react";
import Topleft from "./components/Topleft";
import Topright from "./components/Topright";
import Bottomleft from "./components/Bottomleft";
import Bottomright from "./components/Bottomright";
import ReactTypingEffect from "react-typing-effect";
import Loader from "./components/Loader";

const fetchData = async () => {
  return new Promise(async (resolve, reject) => {
    const best = await fetch("/bestunitsinsubjects?korpus=gamma");
    const top = await fetch("/top10avg?korpus=gamma");
    if (best.ok && top.ok) {
      const best_json = await best.json();
      const top_json = await top.json();
      Promise.all([best_json, top_json]).then(() =>
        resolve({ best: best_json, top: top_json })
      );
    } else {
      reject("При загрузке данных произошла ошибка");
    }
  });
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [best, setBest] = useState(null);
  const [top, setTop] = useState(null);
  useEffect(() => {
    fetchData()
      .then((res) => {
        setBest(res.best);
        setTop(res.top);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading, error]);
  if (loading) return <></>;
  if (error)
    return (
      <div className="loading_container">
        <ReactTypingEffect
          text={[error]}
          className="bestclass_title loading"
          speed={40}
          eraseDelay={800000000000}
          typingDelay={0}
        />
      </div>
    );
  return (
    <React.StrictMode>
      <img
        src="imgs/logo_white_small.png"
        alt="1502"
        className="logo"
        style={{ position: "absolute" }}
      />
      <ReactTypingEffect
        text={["ЛУЧШИЙ КЛАСС В ПРЕДМЕТЕ "]}
        className="bestclass_title"
        speed={40}
        eraseDelay={800000000000}
        typingDelay={0}
      />
      <Topleft best={best} />
      <Topright best={best} />
      <Bottomleft top={top} />
      <Bottomright />
    </React.StrictMode>
  );
};

export default App;
