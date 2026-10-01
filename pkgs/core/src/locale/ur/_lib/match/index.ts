import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(ق|ع)/i,
  abbreviated: /^(ق\s?م|عیسوی)/i,
  wide: /^(قبل مسیح|عیسوی)/i,
};
const parseEraPatterns = {
  any: [/^ق/i, /^ع/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^سہ ماہی [1234]/i,
  wide: /^(پہلی|دوسری|تیسری|چوتھی) سہ ماہی/i,
};
const parseQuarterPatterns = {
  any: [/1|پہلی/i, /2|دوسری/i, /3|تیسری/i, /4|چوتھی/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[جفماسند]/i,
  abbreviated:
    /^(جنوری|فروری|مارچ|اپریل|مئی|مئ|جون|جولائی|اگست|ستمبر|اکتوبر|نومبر|دسمبر)/i,
  wide: /^(جنوری|فروری|مارچ|اپریل|مئی|مئ|جون|جولائی|اگست|ستمبر|اکتوبر|نومبر|دسمبر)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^ج/i,
    /^ف/i,
    /^م/i,
    /^ا/i,
    /^م/i,
    /^ج/i,
    /^ج/i,
    /^ا/i,
    /^س/i,
    /^ا/i,
    /^ن/i,
    /^د/i,
  ] as const,
  any: [
    /^جن/i,
    /^فر/i,
    /^مار/i,
    /^اپ/i,
    /^مئ/i,
    /^جون/i,
    /^جول/i,
    /^اگ/i,
    /^ست/i,
    /^اکت/i,
    /^نوم/i,
    /^دس/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[اپمبجہ]/i,
  short: /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  abbreviated: /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  wide: /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
};
const parseDayPatterns = {
  narrow: [/^ا/i, /^پ/i, /^م/i, /^ب/i, /^ج/i, /^ج/i, /^ہ/i] as const,
  any: [
    /^ات/i,
    /^پیر/i,
    /^منگ/i,
    /^بد/i,
    /^جمعرات/i,
    /^جمعہ/i,
    /^ہفت/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(AM|PM|آدھی رات|دوپہر|صبح|سہ پہر|شام|رات)/i,
  any: /^(AM|PM|آدھی رات|دوپہر|صبح|سہ پہر|شام|رات)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^AM/i,
    pm: /^PM/i,
    midnight: /^آدھی/i,
    noon: /^دوپہر/i,
    morning: /^صبح/i,
    afternoon: /^سہ/i,
    evening: /^شام/i,
    night: /^رات/i,
  },
};

export const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
