import React from "react";
import Circlechart from "./Circlechart";
import ReactTypingEffect from "react-typing-effect";
import moment from "moment";
import Quotes from "./Quotes";

const yearpercent = () => {
  //Тесты
  const current = moment();
  const full_study_year = 273; //days;
  //Проверка на летние месяцы
  if (
    parseInt(current.format("M")) === 6 ||
    parseInt(current.format("M")) === 7 ||
    parseInt(current.format("M")) === 8
  )
    return 0;
  //До или после нового года
  if (
    parseInt(current.format("M")) === 9 ||
    parseInt(current.format("M")) === 10 ||
    parseInt(current.format("M")) === 11 ||
    parseInt(current.format("M")) === 12
  ) {
    //До НГ
    const end_date = moment(
      `31-05-${parseInt(current.format("Y")) + 1}`,
      "DD-MM-YYYY"
    );
    const current_days = parseInt(end_date.diff(current, "days"));
    return Math.round(
      ((full_study_year - current_days) / full_study_year) * 100
    );
  } else {
    //После НГ
    const end_date = moment(`31-05-${current.format("Y")}`, "DD-MM-YYYY");
    const current_days = parseInt(end_date.diff(current, "days"));
    return Math.round(
      ((full_study_year - current_days) / full_study_year) * 100
    );
  }
};

const Right = (props) => {
  const getRandomQuoteIndex = () => {
    return Math.round(Math.random() * (Quotes.length - 1) + 0);
  };
  const quote = Quotes[getRandomQuoteIndex()];
  return (
    <div id="right">
      <div id="right_top">
        <ReactTypingEffect
          text={["ИНФОГРАФИКА"]}
          className="section_title"
          speed={60}
          eraseDelay={800000000000}
          typingDelay={0}
          style={{ paddingTop: 40 }}
          cursorRenderer={(cursor) => <></>}
        />
        <div className="pie_container">
          <Circlechart
            series={yearpercent()}
            title={"Учебный год"}
            measure={"%"}
          />
          <Circlechart
            series={45}
            title={"До каникул"}
            alternativeValue={"4 дня"}
          />
        </div>
      </div>
      <div id="right_bot">
        <blockquote>
          <ReactTypingEffect
            text={[quote.text]}
            speed={20}
            eraseDelay={800000000000}
            typingDelay={0}
            cursorRenderer={() => ""}
          />
          <footer>
            — <cite>{quote.author}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};
export default Right;
