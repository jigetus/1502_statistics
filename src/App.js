import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";
import particlejs_config from "./configs/particlesjs-config";
import Screen1 from "./components/Screen1/Screen1";
import Screen2 from "./components/Screen2/Screen2";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const api = "http://api.stats.srv-g-lemp.lyceum.local";
const fetchData = async () => {
  return new Promise(async (resolve, reject) => {
    const best = await fetch(api + "/bestunitsinsubjects?korpus=gamma");
    const top = await fetch(api + "/top10avg?korpus=gamma");
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
  const [screen, setScreen] = useState(true);
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
        console.log("error");
        setError(error);
        setLoading(false);
      });
  }, [loading, error]);
  useEffect(() => {
    const interval = setInterval(() => {
      setScreen(!screen);
    }, 8000);
    return () => clearInterval(interval);
  }, [screen]);

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
    <>
      <Particles params={particlejs_config} />
      <img
        src="imgs/logo_red_notitle.png"
        alt="1502"
        className="logo"
        style={{ position: "absolute" }}
      />
      <SwitchTransition>
        <CSSTransition
          key={true}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
          // appear={true}
        >
          {screen ? <Screen1 best={best} /> : <Screen2 top={top} />}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default App;
