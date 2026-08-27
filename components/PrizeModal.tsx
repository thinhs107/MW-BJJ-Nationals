"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SESSION_KEY = "mwbjjn_prize_modal_seen";
const REGISTER_URL = "https://smoothcomp.com/en/event/34213";

const LEVELS = ["Novice", "Intermediate", "Advanced"];
const PRIZE = "$250";

export default function PrizeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prize-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: "rgba(10,10,10,0.85)" }}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--white)", border: "1px solid var(--black-border)" }}
      >
        <div className="h-1.5 w-full sticky top-0" style={{ background: "var(--red)" }} />

        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-10"
          style={{ color: "var(--white-dim)" }}
        >
          <X size={20} />
        </button>

        <div className="px-8 pt-8 pb-2 text-center">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.25em]"
            style={{ color: "var(--red)" }}
          >
            Fall Nationals · October 24
          </span>
          <h2
            id="prize-modal-title"
            className="mt-2 text-4xl sm:text-5xl leading-none"
            style={{ fontFamily: "var(--font-bebas), cursive", color: "var(--black)" }}
          >
            $250 Money<br />Brackets
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--white-dim)" }}>
            No-Gi · Adult Men &amp; Women · Novice, Intermediate &amp; Advanced
          </p>
        </div>

        <div className="mx-6 mt-4 px-5 py-4" style={{ background: "var(--black)" }}>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--gold)" }}
          >
            How it works
          </span>
          <ol className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: "var(--white)" }}>
            <li>
              <span style={{ color: "var(--red)" }} className="font-bold mr-1.5">1.</span>
              Compete in your regular adult No-Gi bracket for your skill level.
            </li>
            <li>
              <span style={{ color: "var(--red)" }} className="font-bold mr-1.5">2.</span>
              Podium, and you're in — you advance to the money bracket for your division and skill level.
            </li>
            <li>
              <span style={{ color: "var(--red)" }} className="font-bold mr-1.5">3.</span>
              Win your money bracket, take home $250.
            </li>
          </ol>
        </div>

        <div className="mx-6 my-5 overflow-hidden" style={{ border: "1px solid var(--black-border)" }}>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ background: "var(--black)" }}>
                <th
                  className="text-left font-bold uppercase tracking-wide px-4 py-3"
                  style={{ color: "var(--gold)", fontSize: "11px" }}
                >
                  Level
                </th>
                <th
                  className="text-center font-bold uppercase tracking-wide px-4 py-3"
                  style={{ color: "var(--gold)", fontSize: "11px" }}
                >
                  Women
                </th>
                <th
                  className="text-center font-bold uppercase tracking-wide px-4 py-3"
                  style={{ color: "var(--gold)", fontSize: "11px" }}
                >
                  Men
                </th>
              </tr>
            </thead>
            <tbody>
              {LEVELS.map((level, i) => (
                <tr
                  key={level}
                  style={i % 2 === 1 ? { background: "rgba(0,0,0,0.03)" } : undefined}
                >
                  <td
                    className="px-4 py-3 font-semibold"
                    style={{
                      color: "var(--black)",
                      borderTop: "1px solid var(--black-border)",
                    }}
                  >
                    {level}
                  </td>
                  <td
                    className="px-4 py-3 text-center"
                    style={{
                      fontFamily: "var(--font-bebas), cursive",
                      fontSize: "18px",
                      color: "var(--red)",
                      borderTop: "1px solid var(--black-border)",
                    }}
                  >
                    {PRIZE}
                  </td>
                  <td
                    className="px-4 py-3 text-center"
                    style={{
                      fontFamily: "var(--font-bebas), cursive",
                      fontSize: "18px",
                      color: "var(--red)",
                      borderTop: "1px solid var(--black-border)",
                    }}
                  >
                    {PRIZE}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 pb-8 flex flex-col gap-2">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="w-full text-center py-3 font-bold uppercase tracking-wide"
            style={{ background: "var(--red)", color: "var(--white)" }}
          >
            Register Now
          </a>
          <button
            onClick={close}
            className="w-full text-center text-sm py-1"
            style={{ color: "var(--white-dim)" }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}