"use client";

import React, { useRef, useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";
import { Timer } from "./Timer";

export const Game: React.FC = (): React.JSX.Element => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  let totalSeconds = useRef(0);
  let finishMessage = useRef("");

  usePhaser(config, setGameIsRunning);

  return (
    <>
      {gameIsRunning ? (
        <Timer
          finishMessage={finishMessage}
          totalSeconds={totalSeconds}
          setGameIsRunning={setGameIsRunning}
        />
      ) : finishMessage.current ? (
        finishMessage.current
      ) : (
        "click any button to start"
      )}
    </>
  );
};
