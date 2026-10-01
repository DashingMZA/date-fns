import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "ایک سیکنڈ سے کم",
    other: "{{count}} سیکنڈ سے کم",
  },

  xSeconds: {
    one: "1 سیکنڈ",
    other: "{{count}} سیکنڈ",
  },

  halfAMinute: "آدھا منٹ",

  lessThanXMinutes: {
    one: "ایک منٹ سے کم",
    other: "{{count}} منٹ سے کم",
  },

  xMinutes: {
    one: "1 منٹ",
    other: "{{count}} منٹ",
  },

  aboutXHours: {
    one: "تقریباً 1 گھنٹہ",
    other: "تقریباً {{count}} گھنٹے",
  },

  xHours: {
    one: "1 گھنٹہ",
    other: "{{count}} گھنٹے",
  },

  xDays: {
    one: "1 دن",
    other: "{{count}} دن",
  },

  aboutXWeeks: {
    one: "تقریباً 1 ہفتہ",
    other: "تقریباً {{count}} ہفتے",
  },

  xWeeks: {
    one: "1 ہفتہ",
    other: "{{count}} ہفتے",
  },

  aboutXMonths: {
    one: "تقریباً 1 مہینہ",
    other: "تقریباً {{count}} مہینے",
  },

  xMonths: {
    one: "1 مہینہ",
    other: "{{count}} مہینے",
  },

  aboutXYears: {
    one: "تقریباً 1 سال",
    other: "تقریباً {{count}} سال",
  },

  xYears: {
    one: "1 سال",
    other: "{{count}} سال",
  },

  overXYears: {
    one: "1 سال سے زیادہ",
    other: "{{count}} سال سے زیادہ",
  },

  almostXYears: {
    one: "لگ بھگ 1 سال",
    other: "لگ بھگ {{count}} سال",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      // Urdu is postpositional: "5 منٹ میں" (in 5 minutes)
      return result + " میں";
    } else {
      // "5 منٹ پہلے" (5 minutes ago)
      return result + " پہلے";
    }
  }

  return result;
};
