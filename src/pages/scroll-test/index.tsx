import { useEffect } from "react";

export default function ScrollTest() {
  // useEffect(() => {
  //   const hash = window.location.hash.substring(1);
  //   if (hash) {
  //     const targetElement = document.getElementById(hash);

  //     if (targetElement) {
  //       const offset = 100; // 상단 여백 (픽셀 단위)
  //       const elementPosition =
  //         targetElement.getBoundingClientRect().top + window.pageYOffset;
  //       const offsetPosition = elementPosition - offset;

  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, [window]);
  // const handleScroll = () => {};
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
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
              width: "30%",
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
              width: "30%",
              display: "block",
              background: "#cccccc",
              height: "60px",
            }}
          >
            2앵커
          </a>
          <a
            href="#content3"
            style={{
              width: "30%",
              display: "block",
              background: "#cccccc",
              height: "60px",
            }}
          >
            3앵커
          </a>
        </nav>
      </div>
      <div style={{ scrollBehavior: "smooth" }}>
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
              minHeight: "800px",
            }}
          >
            content1 영역
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
              minHeight: "800px",
            }}
          >
            content1 영역
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
              minHeight: "800px",
            }}
          >
            content1 영역
          </div>
        </section>
      </div>
    </div>
  );
}
