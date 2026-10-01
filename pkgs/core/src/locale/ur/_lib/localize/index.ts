import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["ق", "ع"] as const,
  abbreviated: ["ق م", "عیسوی"] as const,
  wide: ["قبل مسیح", "عیسوی"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["سہ ماہی 1", "سہ ماہی 2", "سہ ماہی 3", "سہ ماہی 4"] as const,
  wide: [
    "پہلی سہ ماہی",
    "دوسری سہ ماہی",
    "تیسری سہ ماہی",
    "چوتھی سہ ماہی",
  ] as const,
};

// Urdu has no capitalization, and Pakistani usage writes month names in full
// even in abbreviated form (same as CLDR ur).
const monthValues = {
  narrow: ["ج", "ف", "م", "ا", "م", "ج", "ج", "ا", "س", "ا", "ن", "د"] as const,
  abbreviated: [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر",
  ] as const,
  wide: [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر",
  ] as const,
};

// Index 0 = Sunday (اتوار)
const dayValues = {
  narrow: ["ا", "پ", "م", "ب", "ج", "ج", "ہ"] as const,
  short: ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"] as const,
  abbreviated: [
    "اتوار",
    "پیر",
    "منگل",
    "بدھ",
    "جمعرات",
    "جمعہ",
    "ہفتہ",
  ] as const,
  wide: ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"] as const,
};

const dayPeriods = {
  am: "AM",
  pm: "PM",
  midnight: "آدھی رات",
  noon: "دوپہر",
  morning: "صبح",
  afternoon: "سہ پہر",
  evening: "شام",
  night: "رات",
};

const dayPeriodValues = {
  narrow: dayPeriods,
  abbreviated: dayPeriods,
  wide: dayPeriods,
};

const formattingDayPeriodValues = {
  narrow: dayPeriods,
  abbreviated: dayPeriods,
  wide: dayPeriods,
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  return String(dirtyNumber);
};

export const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
