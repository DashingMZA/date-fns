import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'گزشتہ' eeee 'کو' p",
  yesterday: "'گزشتہ کل' p",
  today: "'آج' p",
  tomorrow: "'آنے والا کل' p",
  nextWeek: "'آئندہ' eeee 'کو' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (token) =>
  formatRelativeLocale[token];
