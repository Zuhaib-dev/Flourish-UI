# 💳 Interactive Credit Card Form

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/credit-card-form)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/credit-card-form/public/Preview.png" alt="Credit Card Form Preview" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
</div>

A tactile, interactive 3D flippable credit card form component with dynamic input focus highlighting, number slot slide animations, Luhn validation, and smooth dual-sided flip transitions.

## Features
- **3D Card Flip**: Automatically flips to the back when focusing the CVV security code.
- **Dynamic Field Highlighting**: Smooth floating highlight indicator that tracks the active input (Number, Holder, Expiration, CVV).
- **Slot Machine Digit Animation**: Individual digit slots that smoothly animate into place with placeholder masking (`**** ****`).
- **Comprehensive Validation**: Live Luhn algorithm check, expiration validation, holder verification, and CVV checks.
- **Customizable Rings**: Dual gradient accent glow rings configurable via `ring1` and `ring2` props.
- **shadcn & Tailwind CSS Ready**: Adheres to shadcn UI project structure located in `components/ui/credit-card-form.tsx`.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Component Usage

```tsx
import { CreditCardForm, type CardState, type CardValidity } from "@/components/ui/credit-card-form";

export default function CheckoutPage() {
  return (
    <CreditCardForm
      defaultHolder="JANE DOE"
      maskMiddle={true}
      ring1="#ff6be7"
      ring2="#7288ff"
      onChange={(state: CardState, validity: CardValidity) => {
        console.log("Card state:", state, validity);
      }}
      onSubmit={(state, validity) => {
        console.log("Submitted:", state);
      }}
    />
  );
}
```

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
