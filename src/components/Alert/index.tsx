import React from "react";
import styled from "./alert.module.css";

export default function Alert({ active }: { active: boolean }) {
  return (
    <div
      className={styled.alert_wrap}
      style={{
        top: active ? "30px" : "-60px",
      }}
    >
      <p>생성이 완료되었어요!</p>
    </div>
  );
}
