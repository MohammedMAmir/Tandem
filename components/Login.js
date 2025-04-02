"use client";
// Imports
import React, { useState } from "react";
import { Fugaz_One, Sansita_Swashed } from "next/font/google";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

// Global Fonts
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Login() {
  // Stateful functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  // Auth context
  const { signup, login } = useAuth();

  // Handle submission of login/register form to Firebase
  async function handleSubmit() {
    /*
    Todo:
    - Use ReGex for password format
    - Have error messages for user feedback during password creation process
    */

    // If there's no email or password or the password is less than 6 characters, don't submit
    if (!email || !password || password.length < 6) {
      return;
    }
    setAuthenticating(true);
    try {
      if (isRegister) {
        console.log("Signing up a new user");
        await signup(email, password);
      } else {
        console.log("Logging in existing user");
        await login(email, password);
      }
    } catch (err) {
      console.log(err.message);
    }
    setAuthenticating(false);
  }

  return (
    <div
      className="flex flex-col flex-1 justify-center
    items-center gap-6"
    >
      {/* Heading */}
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + sansita.className}>
        {isRegister ? "Register" : "Login"}
      </h3>
      <p>You're one step away from being in-step everyday!</p>

      {/* Email */}
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="w-full max-w-[400px] mx-auto px-3 py-2
      sm:py-3 lightInput duration-200"
        placeholder="Email"
      />

      {/* Password */}
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-full max-w-[400px] mx-auto px-3 py-2
      sm:py-3 lightInput duration-200"
        placeholder="Password"
        type="password"
      />

      {/* Submit Button */}
      <div className="max-w-[400px] w-full mx-auto ">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
        />
      </div>

      {/* Toggle Register and Login */}
      <p className="text-center">
        {!isRegister ? `Don't have an account? ` : `Already have an account? `}{" "}
        <button
          className="text-[var(--light-prime)]"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}
