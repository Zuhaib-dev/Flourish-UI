---
name: Executive Signature Flow
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45464c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#555f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f1'
  on-secondary-container: '#596372'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261906'
  on-tertiary-container: '#968065'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#d9e3f4'
  secondary-fixed-dim: '#bdc7d8'
  on-secondary-fixed: '#121c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#f9debf'
  tertiary-fixed-dim: '#dcc2a4'
  on-tertiary-fixed: '#261906'
  on-tertiary-fixed-variant: '#55442d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  legal-disclaimer:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: 1rem
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system establishes a high-trust, functional, and rigorously minimal digital execution environment. Targeted at legal, enterprise, and compliance-driven workflows, the experience removes unnecessary visual friction to foster confidence, focus, and rapid completion. 

The aesthetic is anchored in an uncompromising modern minimalism: clinical white working surfaces, precise neutral gray framing, high-legibility dark neutral typography, and whisper-thin architectural borders. Tactile ambiguity is eliminated in favor of immediate affordances—crisp segmentation, dedicated interactive signature pads, and understated utility controls that feel deliberate and institutional.

## Colors
The palette is strictly monochromatic and utilitarian, engineered to direct absolute focus onto the signing artifact and binding legal terms:

- **Primary (`#111827`)**: Deep neutral graphite used for primary calls-to-action, active state indicators, high-contrast headings, and primary signature ink strokes.
- **Secondary (`#4B5563`)**: Balanced slate-gray used for secondary actions, supporting meta-information, contextual icons, and deselect states.
- **Neutral (`#F9FAFB`)**: Cool-tinted off-white used for full-screen backdrop underlays, input field wells, canvas framing panels, and inactive tab tracks.
- **Surface (`#FFFFFF`)**: Pure clinical white dedicated strictly to the signature dialog container, active tab segments, and interactive drawing canvases.
- **Borders & Rules (`#E5E7EB`)**: Structural, low-contrast divider lines providing clear delineation without visual noise.
- **System Accents**: Error states leverage an austere crimson (`#DC2626`) strictly for validation blocks and clearing warnings; active canvas guides utilize an ultra-subtle primary tint (`#E5E7EB` baseline with `#9CA3AF` focal dashes).

## Typography
Typography is powered by `Inter` across all structural tiers to deliver supreme clarity, mechanical precision, and legal neutrality. 

- **Display & Modal Headers**: Set compactly with slight negative tracking (`-0.02em` to `-0.015em`) and semi-bold weights (`600`) to anchor the modal context without dominating the task.
- **Form & Tab Labels**: Medium weights (`500`) maintain crisp legibility at small sizes, ensuring actionable options are immediately scan-friendly.
- **Legal Copy & Disclaimers**: Rendered in a dedicated micro-scale `legal-disclaimer` (11px / 16px line-height) using secondary tones (`#6B7280`) to ensure total compliance visibility without competing with input ergonomics.
- **Interactive Type Signature Output**: When typing a signature, an authentic script font or curated humanized display face should render inside the pad area at `1.75rem` (`28px`), anchored strictly on the baselines.

## Layout & Spacing
The layout system is tailored specifically around focused modal containment.

- **Modal Sizing**: Desktop dialog spans a fixed ergonomic width of `560px` to `640px`, centered within the viewport. On mobile (`<640px`), the dialog transforms to an edge-to-edge bottom sheet or full-canvas overlay using `margin: 1rem` safe-insets.
- **Spacing Rhythm**: Governed by an immutable 8pt baseline grid (`0.5rem`, `1rem`, `1.5rem`, `2rem`), with half-step intervals (`0.25rem`) used strictly for micro alignments (e.g., segment padding, badge margins, and inline icons).
- **Internal Composition**: Modal sections are divided into three distinct vertical zones:
  1. *Header Zone*: Compact vertical padding (`space-md`), housing the modal title, step indicator, and dismiss icon.
  2. *Interactive Body*: Padded with `space-lg`, organizing tab switches, primary signature pad, and mode-specific configuration fields.
  3. *Legal & Footer Zone*: Enclosed with `space-lg` top/bottom separation, housing single-tap legal confirmation, disclaimer strings, and balanced secondary/primary action controls.

## Elevation & Depth
Elevation in this design system is restrained, favoring crisp surface delineation over exaggerated three-dimensional layering:

- **Backdrop Scrim**: A soft, neutral dark wash (`rgba(17, 24, 39, 0.45)`) combined with a light `backdrop-filter: blur(4px)` to isolate user focus entirely on the signing transaction.
- **Modal Surface**: Renders on pure `#FFFFFF` bounded by a single structural 1px border (`#E5E7EB`) and an ambient, low-profile box shadow: `0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)`.
- **Interactive Canvas Pad**: Inset elevation styling. Framed in a 1px border (`#D1D5DB`) with a slight internal shadow (`inset 0 1px 2px rgba(0, 0, 0, 0.04)`) over a `#FFFFFF` or `#FAFAFA` ground, creating an intuitive, physical "write-here" depression.
- **Segmented Controls & Tab Rails**: Recessed tray in `#F3F4F6` with active tab chips lifted using an ultra-low keycard shadow (`0 1px 3px rgba(0, 0, 0, 0.08)`).

## Shapes
The design uses an intentional, uniform corner radius standard (8px–12px) to communicate institutional structure while remaining modern and approachable:

- **Modal Container**: Master radius of `rounded-xl` (`0.75rem` / `12px`) on desktop viewports. Smooth corner blending on mobile sheets (`rounded-t-xl`).
- **Interactive Canvas Surface & Form Inputs**: Set strictly to `rounded-lg` (`0.5rem` / `8px`) to ensure distinct boundaries and clean alignment with internal controls.
- **Buttons & Control Tabs**: Harmonized at `0.5rem` (`8px`) for standard buttons and segmented track switches.
- **Utility Buttons & Icon Triggers**: Clear, undo, and color switcher utility triggers maintain consistent `0.375rem` to `0.5rem` radii.

## Components

### Modal Dialog Shell
- **Structure**: Constrained centered surface (`max-width: 600px`).
- **Header**: Contains `headline-md` title, subtle document ID badge, and a high-contrast close button (`20px` utility icon inside a `32x32px` touch target).
- **Divider**: Full-width 1px rule (`#E5E7EB`).

### Tab Navigation (Signature Modes)
- **Style**: Segmented track control embedded into an off-white tray (`#F3F4F6`), containing options: "Draw", "Type", and "Upload".
- **States**: Inactive states use `secondary` text with transparent backgrounds. Active tab snaps into place with a `#FFFFFF` fill, 1px perimeter border (`rgba(0,0,0,0.06)`), and crisp `0 1px 2px` drop shadow.

### Signature Canvas Pad
- **Dimensions**: Fixed minimum height of `180px` on desktop, `160px` on mobile.
- **Visual Guides**: Features an unobtrusive horizontal dashed signing baseline positioned `40px` above the bottom edge, terminated with a discreet "x" glyph on the left.
- **Utility Bar**: Positioned at the top or bottom right of the canvas containing minimalist micro-actions:
  - *Clear Canvas*: Monochromatic text button ("Clear") with hover-reveal.
  - *Ink Color Selector*: Subtle toggle dots for standard business inks: Midnight Black (`#111827`) and Navy Blue (`#1E40AF`).

### Typed Signature Input
- **Structure**: High-contrast text input field with embedded style switcher allowing the signer to toggle between 3–4 legal-approved synthetic cursive typefaces.

### Checkbox & Consent Confirmation
- **Alignment**: Top-aligned checkbox with legal acknowledgment.
- **Box Style**: 16x16px boundary, `rounded-sm` (4px), 1px solid border (`#D1D5DB`). Checked state fills with `#111827` featuring a pure white check vector.
- **Label**: Accompanied by `body-sm` stating adherence to electronic signature and record disclosure terms.

### Action Buttons
- **Primary ("Adopt and Sign")**: Solid `#111827` background, pure white text, `label-md` semi-bold, `rounded-lg`, height `44px`. Hover shifts to `#1F2937`; active state scales subtly (`0.99`).
- **Secondary ("Cancel")**: Ghost/Outline button with `#E5E7EB` border, `#4B5563` text, `#FFFFFF` surface. Hover shifts to `#F9FAFB`.