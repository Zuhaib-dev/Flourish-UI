"use client";

import React from "react";
import AdmitOneTicket from "./admit-one-3-d-holographic-ticket";

export default function AdmitOneTicketDemo() {
  return (
    <div className="flex min-h-125 w-full items-center justify-center bg-zinc-950 p-8">
      <div className="flex flex-col items-center gap-4">
        <AdmitOneTicket
          name="Zuhaib Rashid"
          presenter="CYBERSPACE 2026"
          event="TECH INNOVATION SUMMIT"
          venue="SECTOR 07 • MAINFRAME AUDITORIUM"
          dates="OCTOBER 24-26, 2026 • SAN FRANCISCO"
          stubText="VIP ACCESS"
          watermark="2026"
          width={580}
        />
        <p className="text-xs font-mono text-zinc-500">
          Move your cursor over the ticket to experience dynamic 3D tilt, holographic foil, and specular highlights.
        </p>
      </div>
    </div>
  );
}
