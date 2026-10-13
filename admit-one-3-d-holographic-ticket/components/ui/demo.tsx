"use client";

import React from "react";
import AdmitOneTicket from "./admit-one-3-d-holographic-ticket";

export default function AdmitOneTicketDemo() {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [ticketWidth, setTicketWidth] = React.useState(280);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setTicketWidth(Math.floor(Math.min(580, entry.contentRect.width)));
    });
    resizeObserver.observe(stage);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="flex min-h-125 w-full items-center justify-center overflow-hidden bg-zinc-950 p-4 sm:p-8">
      <div ref={stageRef} className="flex w-full max-w-[580px] flex-col items-center gap-4">
        <AdmitOneTicket
          name="Zuhaib Rashid"
          presenter="CYBERSPACE 2026"
          event="TECH INNOVATION SUMMIT"
          venue="SECTOR 07 • MAINFRAME AUDITORIUM"
          dates="OCTOBER 24-26, 2026 • SAN FRANCISCO"
          stubText="VIP ACCESS"
          watermark="2026"
          width={ticketWidth}
        />
        <p className="max-w-full text-center text-xs font-mono text-zinc-500">
          Move your cursor over the ticket to experience dynamic 3D tilt, holographic foil, and specular highlights.
        </p>
      </div>
    </div>
  );
}
