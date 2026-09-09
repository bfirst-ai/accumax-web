/* One source of truth for what AccuMax connects to.
 *
 * The list previously lived in three places -- the features page, the homepage
 * band, and the unused Integrations section -- which is how UltraTax and
 * Lacerte ended up needing removing in three separate files. */

export type IntegrationGroup = {
  category: string;
  tools: string[];
};

export const integrationGroups: IntegrationGroup[] = [
  { category: "Accounting & tax", tools: ["QuickBooks", "Drake"] },
  { category: "Email", tools: ["Outlook", "Gmail"] },
  { category: "eSignature", tools: ["DocuSign", "Zoho Sign"] },
  {
    category: "Documents & storage",
    tools: ["Microsoft 365", "SharePoint", "Google Docs", "Box"],
  },
];

/** Flat list, in group order, for the lighter homepage band. */
export const integrations: string[] = integrationGroups.flatMap((g) => g.tools);
