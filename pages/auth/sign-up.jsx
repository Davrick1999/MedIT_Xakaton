import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      router.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>Sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-gray-100 justify-center items-center h-screen">
        <div className="border-2 rounded-xl shadow-xl bg-white w-1/3 p-12 space-y-4">
          <p className="text-2xl pb-2">Зарегистрироваться</p>
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
          <Input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            hasSubLabel={false}
            password
            label="Подтвердите пароль"
          />
          <button
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 transition ease-linear text-white font-medium py-1.5 px-4 rounded"
            onClick={(e) => handleSubmit(e)}
          >
            Зарегистрироваться
          </button>
          <div className="flex space-x-2">
            <p>Уже есть аккаунт?</p>
            <p
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/auth/login")}
            >
              Логин
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
