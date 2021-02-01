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
function num_word(value) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return "дней";
  if (num > 1 && num < 5) return "дня";
  if (num === 1) return "день";
  return "дней";
}

//Передавать первый год в учебных (например, 2020-2021 учебный год - в функцию передать 2020)
const get_array_kanikuli = (firstYear) => [
  {
    start: moment(`07-10-${firstYear}`, "DD-MM-YYYY"),
    end: moment(`18-10-${firstYear}`, "DD-MM-YYYY"),
  },
  {
    start: moment(`31-12-${firstYear}`, "DD-MM-YYYY"),
    end: moment(`17-01-${firstYear + 1}`, "DD-MM-YYYY"),
  },
  {
    start: moment(`23-02-${firstYear + 1}`, "DD-MM-YYYY"),
    end: moment(`28-02-${firstYear + 1}`, "DD-MM-YYYY"),
  },
  {
    start: moment(`07-04-${firstYear + 1}`, "DD-MM-YYYY"),
    end: moment(`11-04-${firstYear + 1}`, "DD-MM-YYYY"),
  },
  {
    start: moment(`01-06-${firstYear + 1}`, "DD-MM-YYYY"),
    end: moment(`31-08-${firstYear + 1}`, "DD-MM-YYYY"),
  },
];

const get_kanikuli_days = () => {
  //НА СЛЕДУЮЩИЙ УЧЕБНЫЙ ГОД МЕНЯТЬ ВОТ ТУТ!!!!!!!!!!!!!!!!!!!!!!!!!
  const kanikuli = get_array_kanikuli(2020);
  const current = moment();
  //Сейчас каникулы?
  let kanikuli_now = false;
  kanikuli.forEach((el) => {
    if (current.isBetween(el.start, el.end, "days", "[]")) {
      kanikuli_now = true;
    }
  });
  if (kanikuli_now) {
    return { percent: 100, title: "Каникулы идут" };
  }
  //Высчитываем ближайшии каникулы
  let help_array = [];
  kanikuli.forEach((el, index) => {
    help_array.push({
      days: el.start.diff(current, "days"),
      index: index,
    });
  });
  let days = 365;
  let index = 0;
  help_array.forEach((el) => {
    if (el.days > 0) {
      if (el.days < days) {
        days = el.days;
        index = el.index;
      }
    }
  });
  //считаем процент
  //индекс равен 0
  let percent = 0;
  if (index === 0) {
    const asd = kanikuli[index].start.diff(
      moment(`01-09-${kanikuli[index].start.format("Y")}`, "DD-MM-YYYY"),
      "days"
    );
    percent = Math.round(((asd - days) / asd) * 100);
  } else {
    //для всех других случаев
    const asd = kanikuli[index].start.diff(kanikuli[index - 1].end, "days");
    percent = Math.round(((asd - days) / asd) * 100);
  }

  return { percent: percent, title: `${days} ${num_word(days)}` };
};

const Right = (props) => {
  //Цитаты
  const getRandomQuoteIndex = () => {
    return Math.round(Math.random() * (Quotes.length - 1) + 0);
  };
  const quote = Quotes[getRandomQuoteIndex()];
  //Каникулы
  const kanikuli_info = get_kanikuli_days();
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
            series={kanikuli_info.percent}
            title={
              kanikuli_info.title === "Каникулы идут"
                ? "Каникулы"
                : "До каникул"
            }
            alternativeValue={
              kanikuli_info.title === "Каникулы идут" ? "" : kanikuli_info.title
            }
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
