import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main = (props) => {
  const navigate = useNavigate();
  const Week = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };
  console.log(Object.keys(Week).map((cur, idx) => Week[cur]));

  /////////////////////////////////////////////////////////////////////////////////////
  const weekDays = Object.keys(Week).map((cur, idx) => {
    // 오늘 날짜
    let today = new Date().getDay();

    // 문자형으로 바뀐 Week 딕셔너리의 키 값을 숫자형으로 바꾸어 연산 (7진법)
    let d =
      today + parseInt(cur) > 6
        ? today + parseInt(cur) - 7
        : today + parseInt(cur);
    console.log(d);
    return Week[d];
  });
  console.log(weekDays); // 오늘 기준 정렬
  /////////////////////////////////////////////////////////////////////////////////////

  // 요일별 평점 함수.
  const week_rates = weekDays.map((w, idx) => {
    return {
      // day = 요일
      day: w,
      // 랜덤 평점
      rate: Math.floor(Math.random() * Math.floor(5)),
    };
  });
  console.log("랜덤평점", week_rates);
  /////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className={styles.MainBox}>
        <h3 className={styles.MainTitle}>내 일주일은?</h3>
        {week_rates.map((w, idx) => {
          return (
            <div key={`week_day_${idx}`} className={styles.MainLine}>
              <p className={styles.MainDayText}>{w.day}</p>
              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <div
                    key={idx}
                    className={styles.MainPoint}
                    style={{
                      backgroundColor: w.rate < idx ? "#ddd" : "#a5d7a7",
                    }}
                  ></div>
                );
              })}
              <div
                className={styles.MainAngleBtn}
                onClick={() => {
                  // 요일 별 페이지로 이동
                  navigate(`/Detail/${w.day}`);
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
