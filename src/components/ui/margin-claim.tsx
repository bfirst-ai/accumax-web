/* One source of truth for the gross-margin figure and the model behind it.
 *
 * The figure comes out of a model, not out of measured customer results, so
 * it is qualified in two places: a short label next to the number itself, and
 * an asterisk landing on the full assumptions. Both live here so they cannot
 * drift apart.
 *
 * The short label matters legally as well as editorially -- a disclosure the
 * reader never scrolls to is a weak one, so the claim carries its own
 * qualifier and the footnote carries the detail.
 *
 * MarginBasisNote must be rendered on any page showing the figure, or the
 * asterisks link nowhere. Today that is home, about and why-accumax. */

export const MARGIN_BASIS =
  "Not measured customer results. It shows a firm that moves about 25% more returns through the same team, shifts roughly 20% of preparation hours to automated or lower-cost capacity, and bills advisory work on about 15% of the accounts it already serves. Your own result depends on your service mix, your rates, and how far you adopt the CoPilots. AccuMax does not guarantee a particular margin outcome.";

/** Superscript marker pointing at the disclosure. Inherits colour so it stays
 *  legible on the dark bands as well as the light ones. */
export function MarginAsterisk() {
  return (
    <a
      href="#margin-basis"
      aria-label="The assumptions behind this figure"
      className="align-super text-[0.55em] font-bold text-current opacity-70 hover:opacity-100 transition-opacity no-underline"
    >
      *
    </a>
  );
}

/** The short qualifier that travels with the number. */
export function MarginQualifier({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-wide text-[var(--muted-foreground)] ${className}`}
    >
      Illustrative model
    </p>
  );
}

/** The full disclosure. One per page, near the foot. */
export function MarginBasisNote() {
  return (
    <aside
      id="margin-basis"
      aria-label="Assumptions behind the gross margin figure"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--gray-50)] py-8"
    >
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs leading-relaxed text-[var(--muted-foreground)] text-pretty">
          <span className="font-bold text-[var(--foreground)]">
            * The gross margin figure is an illustrative model.
          </span>{" "}
          {MARGIN_BASIS}
        </p>
      </div>
    </aside>
  );
}
