"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginInProgress(true);

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });

    setLoginInProgress(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-4xl font-semibold text-center text-primary mb-4">
        Login
      </h1>

      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />

        <button type="submit" disabled={loginInProgress}>
          Login
        </button>

        <p className="text-center my-4 text-gray-500">or login with provider</p>
        <button
          className=" flex items-center gap-4 justify-center"
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image
            src="/google.png"
            alt="google"
            width={20}
            height={20}
            className="inline"
          />
          Login with google
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
