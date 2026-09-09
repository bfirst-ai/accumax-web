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
  "Not measured customer results. It models a firm of $5M to $30M in revenue where tax preparation is 60% of the book, starting from a 62% gross margin. AccuMax cuts preparation hours on that work by 30%; the freed capacity supports 10% more returns; and the firm adds new advisory revenue equal to 10% of its book at a 70% margin. On those assumptions gross margin dollars rise about 30%, on 17% more revenue. Stated as a percentage rather than dollars, gross margin moves from 62% to 69% — a gain of 7 points, not 30. Your own result depends on your service mix, your rates, and how far you adopt the CoPilots. AccuMax does not guarantee a particular outcome.";

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
