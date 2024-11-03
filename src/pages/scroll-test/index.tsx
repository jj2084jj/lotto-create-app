import { useEffect } from "react";

export default function ScrollTest() {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        scrollPaddingTop: "70px",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "56px",
          left: 0,
          zIndex: 1000, // 고정 요소가 스크롤 시 다른 요소 위에 보이도록 설정
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="#content1"
            style={{
              width: "33.3%",
              display: "block",
              background: "#cccccc",
              height: "60px",
            }}
          >
            1앵커
          </a>
          <a
            href="#content2"
            style={{
              width: "33.3%",
              display: "block",
              background: "#a4a4a4",
              height: "60px",
            }}
          >
            2앵커
          </a>
          <a
            href="#content3"
            style={{
              width: "33.3%",
              display: "block",
              background: "#f0f0f0",
              height: "60px",
            }}
          >
            3앵커
          </a>
        </nav>
      </div>
      <div>
        <section
          id="content1"
          style={{
            height: "auto",
            background: "black",
            color: "white",
          }}
        >
          <div
            style={{
              minHeight: "1200px",
            }}
          >
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test1.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test2.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test7.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test8.jpg"
              alt=""
            />
          </div>
        </section>
        <section
          id="content2"
          style={{
            height: "auto",
            background: "#817e7e",
            color: "white",
          }}
        >
          <div
            style={{
              minHeight: "1200px",
            }}
          >
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test3.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test4.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test9.jpg"
              alt=""
            />
          </div>
        </section>
        <section
          id="content3"
          style={{
            height: "auto",
            background: "#e0e0e0",
            color: "white",
          }}
        >
          <div
            style={{
              minHeight: "1200px",
            }}
          >
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test5.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test6.jpg"
              alt=""
            />
            <img
              src="https://market-web-source.s3.ap-northeast-2.amazonaws.com/test10.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}
