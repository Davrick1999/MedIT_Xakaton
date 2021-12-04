import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
      {router.pathname !== "/auth/sign-up" &&
        router.pathname !== "/auth/login" && <Navbar />}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
