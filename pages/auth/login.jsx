import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      router.push("/");
    } catch {
      setError("Failed to login");
    }

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-gray-100 justify-center items-center h-screen">
        <div className="border-2 rounded-xl shadow-xl bg-white w-1/3 p-12 space-y-4">
          <p className="text-2xl pb-2">Войти в систему</p>
          {error && <p className="text-red-500">{error}</p>}
          <Input
            onChange={(e) => setEmail(e.target.value)}
            hasSubLabel={false}
            label="Эл. почта"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            hasSubLabel={false}
            password
            label="Пароль"
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 transition ease-linear text-white font-medium py-1.5 px-4 rounded"
            disabled={loading}
            onClick={(e) => handleSubmit(e)}
          >
            Зарегистрироваться
          </button>
          <div className="flex space-x-2">
            <p>Впервые здесь?</p>
            <p
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/auth/sign-up")}
            >
              Зарегистрироваться
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
