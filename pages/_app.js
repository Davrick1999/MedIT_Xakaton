// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import "../styles/Clinics.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
