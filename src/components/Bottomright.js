import React from "react";
import Circlechart from "./Circlechart";
import ReactTypingEffect from "react-typing-effect";
import moment from "moment";

const yearpercent = () => {
  //Тесты
  const current = moment();
  const full_study_year = 272; //days;
  //Проверка на летние месяцы
  if (
    parseInt(current.format("M")) === 6 ||
    parseInt(current.format("M")) === 7 ||
    parseInt(current.format("M")) === 8
  )
    return 0;

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

// const holidays = () => {
//   const start_dates = [""];
// };

const Bottomright = (props) => {
  // const [year, setYear] = React.useEffect(23);
  React.useEffect(() => {}, []);
  return (
    <section className="bottom" id="bottomright">
      <ReactTypingEffect
        text={["ИНФОГРАФИКА"]}
        className="section_title"
        speed={60}
        eraseDelay={800000000000}
        typingDelay={0}
      />
      <div className="graphs">
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
        <Circlechart
          series={66}
          title={"Что-нибудь"}
          alternativeValue={"8 дней"}
        />
      </div>
    </section>
  );
};
export default Bottomright;
