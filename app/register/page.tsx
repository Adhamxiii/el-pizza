"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await axios.post("/api/register", { email, password });

    if (response.status === 200) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
    // setTimeout(() => setError(false), 3000);
  };

  return (
    <section className="mt-8">
      <h1 className="text-4xl font-semibold text-center text-primary mb-4">
        Register
      </h1>

      {userCreated && (
        <p className="text-center my-4 text-gray-500">
          User created.
          <br />
          Now you can{" "}
          <Link href="/login" className="underline">
            Login &raquo;
          </Link>
        </p>
      )}

      {error && (
        <p className="text-center my-4 text-gray-500">
          Error creating user.
          <br />
          Please try again later.
        </p>
      )}

      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <p className="text-center my-4 text-gray-500">or login with provider</p>
        <button
          className=" flex items-center gap-4 justify-center"
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
        <p className="text-center text-gray-500 my-4 border-t pt-4">
          Existing account?{" "}
          <Link href="/login" className="underline">
            Login here &raquo;
          </Link>
        </p>
      </form>
    </section>
  );
};

export default RegisterPage;
