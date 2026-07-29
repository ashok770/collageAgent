# CasePilot Product Design System

**Product:** CasePilot  
**Tagline:** Government & Banking AI Investigation Platform  
**Status:** Foundational reference for future product design and frontend work

## 1. Purpose

CasePilot helps fraud teams receive, assess, investigate, and resolve financial fraud complaints. The interface must make complex, high-consequence work feel understandable and controlled. It should support professional judgment; it must never imply that an AI system has made an irreversible decision for a person.

This document defines the shared visual language, interaction standards, and content conventions for public, citizen, officer, and supervisor experiences.

## 2. Brand personality

CasePilot is calm, capable, and accountable. It communicates the confidence of a well-run public institution and the operational clarity of mature enterprise software.

Users should feel:

- **Confident:** information is accurate, structured, and easy to verify.
- **Safe:** sensitive information is handled with restraint and clear status.
- **Guided:** the next meaningful action is visible without becoming prescriptive.
- **In control:** people can review, question, override, and document decisions.
- **Professional:** language, motion, and visual detail serve the work rather than seek attention.

Avoid visual metaphors associated with speculation, entertainment, or autonomous AI: neon color, decorative gradients, excessive charts, celebratory effects, and human-like AI claims.

## 3. Users and design implications

| User | Core need | Design implication |
| --- | --- | --- |
| Fraud Investigation Officer | Resolve cases quickly while retaining an auditable rationale. | Prioritize evidence, status, risk, ownership, and next action. Support dense work views without visual clutter. |
| Citizen | Understand what happened and what is needed from them. | Use plain language, progressive disclosure, reassuring status updates, and accessible low-stress forms. |
| Supervisor | Monitor workload, quality, risk, and exceptions. | Surface trends, queues, overdue work, escalation paths, and traceability before decorative analytics. |

## 4. Design principles

1. **Trust before beauty.** Clarity, accuracy, and readable status always take priority over visual novelty.
2. **Workflow before features.** Organize screens around the user’s task sequence—intake, review, investigate, decide, resolve—not around system capabilities.
3. **Explainable AI.** AI output is supporting analysis. Its rationale, confidence, source evidence, and limitations must be available at the point of use.
4. **Human in control.** A person owns consequential decisions. Interfaces must make review, correction, override, and approval explicit.
5. **Accessibility is baseline quality.** Keyboard use, contrast, semantic structure, and understandable language are requirements, not enhancements.
6. **Consistency earns speed.** Repeated patterns should behave and look the same so users can build reliable habits.
7. **Minimize cognitive load.** Show the decision-relevant information first; disclose detail progressively and avoid competing calls to action.
8. **Professional over trendy.** Prefer durable typography, restrained color, modest radius, and purposeful motion over fashionable visual effects.

## 5. Visual language

### Overall aesthetic

Use a light, neutral workspace with a deep navy primary color and measured blue accents. The visual character is precise and quiet: stable page structure, clear borders, legible type, and limited emphasis colors. Dark mode should preserve the same hierarchy rather than invert every value mechanically.

### Cards and surfaces

Cards group related decisions or data; they are not decorative containers. Use a card when it establishes a meaningful boundary, such as a case summary, evidence item, or approval step. Prefer flat surfaces with a subtle border. Use elevation only for transient layers such as menus, dialogs, and popovers.

### Hierarchy, density, and white space

- Establish hierarchy through position, type scale, weight, and spacing before color.
- Default to comfortable density in public and citizen flows; allow compact density in officer tables and queues.
- Reserve generous whitespace for major page sections; use tighter rhythm within operational panels.
- Organize content as: page purpose, primary action/status, key facts, then supporting detail.

## 6. Color system

Semantic names, not literal color names, must be used in design files and implementation tokens. Values below are the light-theme reference palette; each semantic token requires a dark-theme counterpart.

| Token | Light reference | Dark reference | Purpose |
| --- | --- | --- | --- |
| Primary | `#163A5F` | `#8FC5FF` | Trusted primary actions, active navigation, and key headings. Navy signals institutional reliability. |
| Primary hover | `#102E4D` | `#B8DAFF` | Interactive feedback with a visible but restrained shift. |
| Secondary | `#475569` | `#CBD5E1` | Supporting actions and secondary emphasis. |
| Background | `#F7F9FC` | `#111827` | Calm application canvas, distinct from content surfaces. |
| Surface | `#FFFFFF` | `#1F2937` | Primary cards, panels, and form areas. |
| Surface subdued | `#F1F5F9` | `#273449` | Grouped or read-only regions. |
| Border | `#CBD5E1` | `#475569` | Clear, low-noise boundaries and input outlines. |
| Text primary | `#172033` | `#F8FAFC` | Primary reading and headings. |
| Text secondary | `#526174` | `#CBD5E1` | Supporting content without reduced legibility. |
| Success | `#176B45` | `#5DDB9B` | Confirmed completion or positive operational status. |
| Warning | `#9A5B00` | `#F8C76A` | Attention required; never use as the only indicator. |
| Danger | `#B42318` | `#FF9A91` | Errors, destructive actions, or high-risk status. |
| Info | `#1D5FA7` | `#7AB8FF` | Neutral guidance and system information. |

Use semantic status color sparingly and always pair it with plain-language text and, where helpful, an icon. Never use color alone to convey case state, validation, or urgency. Meet WCAG 2.2 AA contrast at minimum; body text and interactive controls should generally exceed it.

## 7. Typography

Use **Inter** as the primary interface typeface. It is highly legible at UI sizes and supports a compact but calm enterprise rhythm. Use system sans-serif fallbacks when Inter is unavailable. Do not introduce display fonts.

| Style | Size / line height | Weight | Use |
| --- | --- | --- | --- |
| Display | 36 / 44 px | 700 | Rare public-page hero title only. |
| H1 | 30 / 38 px | 700 | Page title. |
| H2 | 24 / 32 px | 650–700 | Major section title. |
| H3 | 20 / 28 px | 600–700 | Panel or subsection title. |
| H4 | 16 / 24 px | 600 | Dense workspace section title. |
| Body | 16 / 24 px | 400 | Default reading text. |
| Body compact | 14 / 20 px | 400 | Tables, metadata, and compact forms. |
| Label | 14 / 20 px | 500–600 | Controls and field labels. |
| Caption | 12 / 16 px | 400–500 | Timestamps and supporting metadata. |

Use sentence case for labels and headings. Avoid all caps except short, non-essential metadata labels. Do not rely on font weight below 400 for information that must be read. Keep line length near 45–75 characters for prose.

## 8. Iconography

Use Lucide React icons as the sole default icon family. Their outline style should remain consistent within a view.

- Use 16 px in compact controls and tables, 20 px for standard controls, and 24 px for major navigation or empty states.
- Use a 1.5–2 px visual weight consistently; do not mix filled icons with outlines without a semantic reason.
- Pair unfamiliar icons with text or an accessible label. Tooltips supplement labels; they do not replace them for critical actions.
- Icons clarify action, status, or object type. Do not use decorative icons to fill empty space.

## 9. Spacing and layout

Use an 8-point grid. The base increments are 4, 8, 12, 16, 24, 32, 40, 48, and 64 px. A 4 px increment is permitted for optical alignment and compact controls.

| Context | Standard |
| --- | --- |
| App shell horizontal padding | 24 px desktop, 16 px tablet/mobile |
| Public content container | 1120–1200 px maximum |
| Workspace content container | Fluid, with a practical maximum of 1440 px |
| Major page section gap | 40–64 px public; 32–40 px workspace |
| Panel/card padding | 24 px default; 16 px compact |
| Form field stack | 16 px |
| Related control gap | 8 px |
| Unrelated control group gap | 16–24 px |

Layouts must respond by preserving reading order and task priority. Collapse secondary information before making primary content unusably narrow.

## 10. Component behavior principles

### Buttons

One primary action per bounded decision area. Primary buttons are solid navy; secondary buttons are neutral or outlined; tertiary actions are text-like. Destructive actions require explicit danger styling and confirmation when irreversible. Button labels begin with a verb: “Assign officer”, “Request evidence”, “Resolve case”.

### Cards

Use cards for bounded information groups, not every element. Card titles describe the content, and actions sit in predictable header or footer positions. Do not nest cards repeatedly.

### Forms

Labels are always visible, placed above fields, and describe the expected input. Provide help text before validation feedback. Validate close to the field, preserve entered data on failure, and identify required fields in text as well as visually.

### Tables

Tables support comparison and scanning, not a replacement for every layout. Keep the first column identifiable, align numeric data consistently, provide sortable-column state, and make row actions discoverable without hiding essential actions behind hover alone. On small screens, convert to a purposeful summary/list pattern instead of horizontal compression.

### Dialogs

Dialogs interrupt a task only for focused decisions, confirmations, or temporary detail. Use a clear title, concise consequence, predictable focus management, Escape where safe, and a visible close route. Do not use a dialog for multi-step primary workflows.

### Accordions

Accordions reveal optional detail, not required primary content. Their trigger states must be explicit, keyboard-operable, and persistently understandable. Avoid hiding errors, recommendations, or key actions inside collapsed content.

### Navigation

Navigation indicates location, offers a stable route to key areas, and does not become a dumping ground for features. Active state must be visible in more than color. Public navigation remains concise; authenticated workspaces prioritize role-specific tasks.

### Badges and alerts

Badges are compact labels for stable categorical state, such as “High risk” or “Awaiting evidence.” Alerts communicate an actionable condition and include a clear next step when possible. Neither may be the only way to communicate status.

### Loading, empty, and error states

Loading states preserve layout and explain what is loading when delayed. Empty states explain why there is no content and offer an appropriate next action. Error states use human language, retain recoverable work, identify what can be done now, and provide a reference ID for support when relevant.

## 11. Navigation philosophy

### Public website

Make purpose, trust signals, resources, and contact routes easy to find. Keep the primary navigation short, use a clearly distinguished sign-in route, and prioritize content scanning over promotional motion.

### Citizen workspace

Center the experience on the citizen’s case status, required action, secure messages, and submitted evidence. Use plain language and avoid exposing internal investigation terminology or risk scoring.

### Officer workspace

Prioritize assigned work, queue state, case search, evidence, activity history, and decision support. Persistent navigation should remain stable, while contextual navigation belongs within the case workspace.

### Supervisor workspace

Prioritize team queues, exceptions, workload, quality review, approvals, and reporting. Distinguish oversight actions from operational case work to prevent accidental reassignment or disposition changes.

## 12. AI design guidelines

Every AI recommendation must present:

1. **Recommendation:** what the system suggests, written as advice rather than a command.
2. **Reason:** a concise explanation in language an officer can assess.
3. **Confidence:** a calibrated qualitative label and, where appropriate, a numeric value with context.
4. **Evidence:** traceable source records, signals, or excerpts that support the recommendation.
5. **Next action:** a clear human action, including review or escalation options.

AI-generated content must be clearly labeled, timestamped, and attributable to its model/version where relevant. Provide a way to report an issue or mark advice as unhelpful. Never fabricate certainty, conceal uncertainty, or use an AI recommendation as the sole justification for a consequential outcome.

## 13. Accessibility standards

- Support complete keyboard use, including logical tab order, visible focus, menu navigation, dialogs, and skip links where applicable.
- Meet WCAG 2.2 AA contrast and use non-color cues for state and validation.
- Provide 44 × 44 px minimum touch targets when space permits; controls must not be difficult to target on touch devices.
- Use semantic landmarks, correctly associated labels, useful button names, and live-region announcements only for important dynamic changes.
- Respect text zoom, reflow at 320 CSS pixels, and user contrast/motion preferences.
- Write concrete labels and errors: “Case reference must contain 10 digits,” not “Invalid input.”

## 14. Motion

Motion is feedback, not decoration. Use 120–200 ms for common hover, focus, menu, and disclosure transitions; use up to 300 ms for a meaningful layout transition. Prefer opacity and small position changes over large movement. Do not animate critical content into a state where it is temporarily unavailable. Honor `prefers-reduced-motion` by removing non-essential animation.

## 15. Voice and terminology

Write plainly, directly, and respectfully. Name the user’s task and the system state without internal jargon. Use active voice for user actions and neutral language for system messages.

| Prefer | Avoid | Rationale |
| --- | --- | --- |
| Case | Ticket, item | Reflects an investigation record, not generic support work. |
| Investigation | Processing | Describes deliberate professional analysis. |
| Officer workspace | Dashboard | Names the role and purpose. |
| Supervisor workspace | Admin panel | Names operational responsibility without technical jargon. |
| Evidence | Attachments, artifacts | Emphasizes evidentiary value. |
| Recommendation | Decision | Preserves human authority over AI output. |
| Review | Validate | More understandable where a human assessment is required. |
| Request information | Missing documents | Describes a constructive next step. |
| Resolve case | Close ticket | Communicates a considered outcome. |

Use “you” for citizen-facing instructions; use role-appropriate nouns such as “officer” and “supervisor” in workspaces. Avoid blame, legal conclusions, and unexplained acronyms. Dates, amounts, and reference numbers must follow local formatting conventions and be easy to copy.

## 16. Governance

This system is the default for new work. Before introducing a new pattern, first verify whether an existing pattern can meet the need. New exceptions must document the user problem, accessibility impact, responsive behavior, and a proposal for reuse. Design and engineering should review foundational changes together so the system remains coherent across roles and releases.
