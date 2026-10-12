import AdmitOneTicket from '../../../../../admit-one-3-d-holographic-ticket/components/ui/admit-one-3-d-holographic-ticket'

export default function AdmitOneTicketPreview() {
  return (
    <main className="component-live-preview">
      <AdmitOneTicket
        name="Zuhaib Rashid"
        presenter="CYBERSPACE 2026"
        event="TECH INNOVATION SUMMIT"
        venue="SECTOR 07 • MAINFRAME AUDITORIUM"
        dates="OCTOBER 24–26, 2026 • SAN FRANCISCO"
        stubText="VIP ACCESS"
        watermark="2026"
        width={580}
      />
      <p>Move your pointer over the ticket to tilt the foil.</p>
    </main>
  )
}
