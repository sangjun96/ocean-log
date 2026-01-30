import { DEFAULT_LOCALE } from "@/app/constants/locale";

export function formatDate(isoDate: string, locale = DEFAULT_LOCALE) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
