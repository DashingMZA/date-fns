import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'گزشتہ' eeee 'بوقت' p",
  yesterday: "'گزشتہ کل بوقت' p",
  today: "'آج بوقت' p",
  tomorrow: "'آئندہ کل بوقت' p",
  nextWeek: "'آئندہ' eeee 'بوقت' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
