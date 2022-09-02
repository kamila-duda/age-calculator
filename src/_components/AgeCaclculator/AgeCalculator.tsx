import { useState } from "react";
import "./AgeCalculator.css";

interface ValueProps {
  years: number;
  months: number;
  days: number;
}

interface AgeCalculatorProps {
  setYourAge: (value: ValueProps) => void;
}

export const AgeCalculator = ({ setYourAge }: AgeCalculatorProps) => {
  const now = new Date();
  const [date, setDate] = useState(now.toISOString().slice(0, 10));

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedDate = new Date(date);
    const year = now.getFullYear() - selectedDate.getFullYear();
    const month = now.getMonth() - selectedDate.getMonth();
    const day = now.getDate() - selectedDate.getDate();

    setYourAge({
      years: month < 0 ? year - 1 : year,
      months: month < 0 ? selectedDate.getMonth() : month,
      days: day < 0 ? selectedDate.getDate() : day,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="date" className="label">
        Wybierz swoją datę urodzenia
      </label>
      <input
        className="inputDate"
        id="date"
        type="date"
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDate(e.target.value)
        }
      />
      <input type="submit" className="button" />
    </form>
  );
};
