import React, { useEffect, useState } from "react";
import useNumberCreate from "@/utils/useNumberCreate";
import styled from "../Home/home.module.css";

export default function HomeContainer() {
  const ballsArr = useNumberCreate(45);
  const [balls, setBalls] = useState(ballsArr);

  function selectBalls(value: number) {
    const convert = [...balls];
    const state = convert[value - 1].active;
    convert[value - 1].active = !state;
    setBalls([...convert]);
  }

  return (
    <div>
      <section className="container mt-2">
        <hgroup className="mb-4">
          <h1 className="mb-1">로또 자동 생성기</h1>
          <p>
            원하는 번호를 선택 후, 선택된 번호를 추가한 랜덤 번호가 출력됩니다
            👀
          </p>
        </hgroup>
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
      <div>
        <button className={styled.create_btn}>생성하기</button>
      </div>
    </div>
  );
}
