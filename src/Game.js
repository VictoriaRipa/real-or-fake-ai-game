// src/Game.js
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function Game() {
  const [question, setQuestion] = useState("¿Esta imagen es real o generada por IA?");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Escuchar respuestas en Firestore
    const unsubscribe = onSnapshot(collection(db, "answers"), (snapshot) => {
      const newAnswers = snapshot.docs.map((doc) => doc.data());
      setAnswers(newAnswers);
    });

    return () => unsubscribe();
  }, []);

  const submitAnswer = async (player, answer) => {
    await addDoc(collection(db, "answers"), {
      player,
      answer,
      timestamp: new Date(),
    });
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">Real or Fake: AI Game</h1>
      <p className="text-lg my-4">{question}</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => submitAnswer("Jugador1", "Real")}
        >
          Real
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => submitAnswer("Jugador1", "Fake")}
        >
          Fake
        </button>
      </div>
      <h2 className="text-xl mt-6">Respuestas de los jugadores:</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer.player}: {answer.answer}</li>
        ))}
      </ul>
    </div>
  );
}
