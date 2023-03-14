import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "@/components/container/container";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle")
  }, [])
  return (
   
      <Component {...pageProps} />
  );
}
