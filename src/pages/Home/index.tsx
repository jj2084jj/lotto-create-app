import React, { useEffect, useState } from "react";
import useNumberCreate from "@/utils/useNumberCreate";
import styled from "../Home/home.module.css";
import { GrPowerReset } from "react-icons/gr";
import Alert from "@/components/Alert";

export default function HomeContainer() {
  const ballsArr = useNumberCreate(45);
  const [balls, setBalls] = useState(ballsArr);
  const [alertState, setAlert] = useState(false);
  const [lotto, setLotto] = useState<any[]>([]);

  // timeout alert
  useEffect(() => {
    const activeTime = setTimeout(() => setAlert(false), 3000);
    return () => {
      if (activeTime) {
        clearTimeout(activeTime);
      }
    };
  }, [alertState]);

  function setLottoMix() {
    const originBall = balls.filter((el: any) => el.active === true); // 기존 볼
    const selectBall = balls.filter((el: any) => el.active !== true); // 선택안된 볼
    const arr = [...originBall];

    for (let i = 0; 7 - originBall.length > i; i++) {
      const randomArr = random(selectBall, originBall.length);
      arr.push(randomArr);
    }
    arr.sort((a, b) => a.value - b.value);
    window.scrollTo(0, 0);

    setLotto(arr);
    setAlert(true);
  }

  // reset arr
  function reset() {
    const convert = [...balls];
    convert.forEach((el) => (el.active = false));
    setBalls([...convert]);
  }

  // 볼 선택
  function selectBalls(value: number) {
    const convert = [...balls];
    const state = convert[value - 1].active;
    convert[value - 1].active = !state;

    const convertFilter = convert.filter((el) => el.active === true);

    if (convertFilter.length > 6) {
      alert("최대 6개까지 입력가능합니다.ㅜ_ㅜ");
      return;
    } else {
      setBalls(convert);
      return;
    }
  }

  // random
  function random(arr: any[], langth: number) {
    let count = 45 - langth;
    const randomIdx = Math.floor(Math.random() * count) + 1;
    return arr[randomIdx - 1];
  }

  return (
    <div>
      <Alert active={alertState} />
      <section className="container mt-3">
        <hgroup className="mb-4">
          <h1 className="mb-1">로또 자동 생성기</h1>
          <p>
            원하는 번호를 선택 후, 선택된 번호를 추가한 랜덤 번호가 출력됩니다
            👀
          </p>
        </hgroup>
        {lotto.length > 0 ? (
          <div className={styled.lotto_wrap}>
            <h3>생성번호</h3>
            <div className={styled.lotto_box}>
              {lotto.map((item, index) => {
                return <div key={index}>{item.value}</div>;
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex center mb-5">
          {balls?.map(
            (item: { value: number; active: boolean }, index: number) => {
              return (
                <button
                  key={index}
                  value={item.value}
                  className={`${styled.ball} ${
                    item.active ? styled.active : ""
                  }`}
                  onClick={() => {
                    selectBalls(item.value);
                  }}
                >
                  {item.value}
                </button>
              );
            }
          )}
        </div>
      </section>
      <button className={styled.reset_btn} onClick={reset}>
        <GrPowerReset style={{ fontSize: "40px", paddingTop: "4px" }} />
      </button>
      <div>
        <button className={styled.create_btn} onClick={setLottoMix}>
          번호 생성
        </button>
      </div>
    </div>
  );
}
