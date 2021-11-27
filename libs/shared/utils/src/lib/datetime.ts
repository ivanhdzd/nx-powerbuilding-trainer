import { toDate } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

/** Default time zone */
export const defaultTimeZone: string = 'America/Mexico_City';

/**
 * Returns new now date.
 * @returns {Date} now date.
 */
export function now(): Date {
  return toDate(new Date());
}

/**
 * Returns new now date as UTC.
 * @returns {Date} now date as UTC.
 */
export function nowUTC(): Date {
  return zonedTimeToUtc(new Date(), defaultTimeZone);
}
