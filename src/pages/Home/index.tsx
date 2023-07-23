import React, { useEffect, useState } from "react";
import useNumberCreate from "@/utils/useNumberCreate";
import styled from "../Home/home.module.css";

export default function HomeContainer() {
  const ballsArr = useNumberCreate(45);
  const [balls, setBalls] = useState(ballsArr);

  function selectBalls(value: number) {
    setBalls((el: any) => (el[value].active = true));
  }

  return (
    <div>
      <section className="container">
        <hgroup className="mb-4">
          <h1 className="mb-1">로또 자동 생성기</h1>
          <p>원하는 번호를 선택 후, 랜덤으로 번호가 출력됩니다</p>
        </hgroup>
        <div className="flex">
          {balls.map(
            (item: { value: number; active: boolean }, index: number) => {
              return (
                <button
                  key={index}
                  value={item.value}
                  className={styled.ball}
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
    </div>
  );
}
