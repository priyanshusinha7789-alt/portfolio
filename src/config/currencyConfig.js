/**
 * Centralized Currency Configuration & Conversion Utility
 * PRIME FOCUS Digital Studio
 * 
 * Rules:
 * - Base Currency: INR (₹)
 * - Documented Reference Exchange Rate: 1 USD = 83.325 INR (Baseline: October 2026)
 * - Format: ₹9,999 INR | $120 USD
 * - Never silently alters actual selling prices.
 */

export const CURRENCY_CONFIG = {
  baseCurrency: "INR",
  targetCurrency: "USD",
  exchangeRateINRtoUSD: 83.325, // 1 USD = 83.325 INR
  lastUpdatedDate: "October 2026",
  exchangeRateSource: "Documented Baseline Reference Rate (October 2026)",
  preferredFormat: "₹{INR} INR | ${USD} USD",
  note: "Foreign client quotes are calculated using our documented reference rate (1 USD ≈ ₹83.33 INR, updated October 2026). Final invoice amounts can be settled in USD via Stripe, Wise, or PayPal."
};

/**
 * Calculates USD equivalent from INR using documented exchange rate
 */
export function convertINRtoUSD(inrAmount) {
  if (!inrAmount || isNaN(inrAmount)) return 0;
  return Math.round(inrAmount / CURRENCY_CONFIG.exchangeRateINRtoUSD);
}

/**
 * Formats amount into side-by-side preferred format:
 * e.g. "₹9,999 INR | $120 USD"
 */
export function formatDualPrice(inrAmount, options = {}) {
  const { period = "", isPerMonth = false } = options;
  const inrFormatted = `₹${Number(inrAmount).toLocaleString("en-IN")}`;
  const usdAmount = convertINRtoUSD(inrAmount);
  const usdFormatted = `$${usdAmount}`;

  const periodSuffix = isPerMonth ? " / mo" : period ? ` (${period})` : "";
  return `${inrFormatted} INR | ${usdFormatted} USD${periodSuffix}`;
}

/**
 * Formats single currency displays
 */
export function formatINR(inrAmount, isPerMonth = false) {
  const inrFormatted = `₹${Number(inrAmount).toLocaleString("en-IN")} INR`;
  return isPerMonth ? `${inrFormatted} / mo` : inrFormatted;
}

export function formatUSD(inrAmount, isPerMonth = false) {
  const usdAmount = convertINRtoUSD(inrAmount);
  const usdFormatted = `$${usdAmount} USD`;
  return isPerMonth ? `${usdFormatted} / mo` : usdFormatted;
}
