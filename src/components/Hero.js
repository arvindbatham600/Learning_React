import React from "react";

export default function Hero({ name }) {
  if (name === "Joker") {
    throw new Error("Joker is not a hero");
  }

  return <div>{name}</div>;
}
