"use client";
import { useEffect, useState } from "react";

// ⚙️ Set your global countdown end date here
// Example: countdown ends 7 days after Nov 10, 2025
const END_DATE = new Date("2025-11-17T00:00:00Z").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = END_DATE - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100vw] flex flex-col items-center justify-center py-[5vw] bg-(--secondary)/10">
      <h2 className="text-[2.5vw] font-bold text-(--primary) mb-[3vw]">
        Offer Ends In
      </h2>

      <div className="flex items-center justify-center gap-[3vw]">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-[1vw] shadow-lg px-[3vw] py-[2vw] border border-(--primary)/20"
          >
            <span className="text-[3vw] font-bold text-(--primary)">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[1vw] text-gray-600 mt-[0.6vw]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
