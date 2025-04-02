"use client";
import { Fugaz_One, Open_Sans, Sansita_Swashed } from "next/font/google";
import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useAuth } from "@/context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { database } from "@/firebase";
import Login from "./Login";
import Loading from "./Loading";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Dashboard() {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth();
  const [data, setData] = useState({});

  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  function countValues() {}

  async function handleSetMood(mood) {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const day = now.getDate();
    try {
      const newData = { ...userDataObj };
      if (!newData?.[year]) {
        newData[year] = {};
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {};
      }

      newData[year][month][day] = mood;

      // update current state
      setData(newData);
      // update global state
      setUserDataObj(newData);
      // update firebase
      const docRef = doc(database, "users", currentUser.uid);
      const res = await setDoc(
        docRef,
        {
          [year]: {
            [month]: {
              [day]: mood,
            },
          },
        },
        { merge: true },
      );
    } catch (err) {
      console.log("Failed to set data: ", err.message);
    }
  }

  const moods = {
    "$*@#$": "🤬",
    Sad: "😢",
    Chilling: "😶",
    Good: "😊",
    Elated: "😁",
  };

  // codeblock that sets <data> whenever currentUser or userDataObj
  // changes in context
  useEffect(() => {
    // if there is no user or user object, return in auth
    if (!currentUser || !userDataObj) {
      return;
    } else {
      setData(userDataObj);
    }
  }, [currentUser, userDataObj]);

  if (loading) {
    return <Loading />;
  }
  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className=" flex flex-col flex-1 gap-10 sm:gap-14 md:gap-20 ">
      {/* Render date */}
      <div
        className="p-4 gap-4 grid grid-cols-3 bg-[var(--light-secondary)]
      text-[var(--light-prime)] rounded-lg"
      >
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="flex flex-col gap-1 sm:gap-2">
              <p className="font-medium uppercase text-sm sm:text-md ">
                {status.replaceAll("_", " ")}
              </p>
              <p className={"text-base sm:text-lg " + sansita.className}>
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>

      <h4
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + sansita.className
        }
      >
        How do you <span className="textGradientPrime">feel</span> today?
      </h4>

      {/* Render Mood Buttons*/}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              onClick={() => {
                const currentMoodValue = moodIndex + 1;
                handleSetMood(currentMoodValue);
              }}
              className={
                `p-4 rounded-lg purpleShadow duration-200 bg-[var(--light-secondary)]
             hover:bg-[var(--light-accent)] text-center flex flex-col items-center gap-2
             ` +
                (moodIndex === Object.keys(moods).length - 1
                  ? "col-span-2 sm:col-span-1"
                  : " ")
              }
              key={moodIndex}
            >
              <p
                className={
                  "text-4xl sm:text-5xl md:text-6xl " + sansita.className
                }
              >
                {moods[mood]}
              </p>
              <p className={"text-[var(--light-prime)] " + sansita.className}>
                {mood}
              </p>
            </button>
          );
        })}
      </div>

      <Calendar data={data} handleSetMood={handleSetMood} />
    </div>
  );
}
