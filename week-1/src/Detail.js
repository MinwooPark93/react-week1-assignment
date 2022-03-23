import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [rate, setRate] = React.useState(0);

  // useEffect .[] 괄호안에 지켜보는 다른 함수가 없다면, useEffect 외 다른 컴포넌트 리랜더링 X
  React.useEffect(() => {
    // 키보드이벤트 함수
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);

    // useEffect cleanup - 컴포넌트 사라질때 이벤트 삭제
    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <>
      <div className={styles.DetailBox}>
        <h3>
          <span className={styles.DetailDay}>{params.week_day}요일</span> 평점
          남기기
        </h3>
        <div className={styles.DetailPoints}>
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setRate(idx + 1);
                }}
                className={styles.DetailPoint}
                style={{
                  backgroundColor: rate < idx + 1 ? "#ddd" : "#a5d7a7",
                }}
              ></div>
            );
          })}
        </div>
        <button
          className={styles.DetailBtn}
          onClick={() => {
            // 이전 페이지로 이동
            navigate(-1);
          }}
        >
          평점 남기기
        </button>
      </div>
    </>
  );
};

export default Detail;
