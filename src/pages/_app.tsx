import NavigationContainer from "@/components/navigation";
import "@/styles/globals.css";
import "@/styles/init.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationContainer />
      <Component {...pageProps} />
    </>
  );
}
