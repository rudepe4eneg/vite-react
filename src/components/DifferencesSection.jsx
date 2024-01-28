import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
  const [content, setContent] = useState(null);

  function handleClick(type) {
    setContent(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={content === "way"}
        handleClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={content === "easy"}
        handleClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={content === "program"}
        handleClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {content ? <p>{differences[content]}</p> : <p>Нажми на кнопку</p>}
    </section>
  );
}
