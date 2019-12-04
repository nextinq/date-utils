import { DateTime } from 'luxon';

function dateInvalid(dt: DateTime): boolean {
  return !dt || !dt.isValid;
}

function toLocaleString(dt: DateTime, format: {}): string {
  if (dateInvalid(dt)) {
    return '';
  }
  return dt.toLocaleString(format);
}

export function shortDate(dt: DateTime): string {
  return toLocaleString(dt, DateTime.DATE_SHORT);
}

export function longDate(dt: DateTime): string {
  return toLocaleString(dt, DateTime.DATE_FULL);
}

export function timeNoSeconds(dt: DateTime): string {
  return toLocaleString(dt, DateTime.TIME_24_SIMPLE);
}

export function timeWithSeconds(dt: DateTime): string {
  return toLocaleString(dt, DateTime.TIME_24_WITH_SECONDS);
}

export function timeFullPrecision(dt: DateTime): string {
  if (dateInvalid(dt)) {
    return '';
  }
  return dt.toFormat('HH:mm:ss.SSS');
}

export function shortDateTime(dt: DateTime): string {
  if (dateInvalid(dt)) {
    return '';
  }
  return `${shortDate(dt)} ${timeNoSeconds(dt)}`;
}

export function shortDateTimeWithSeconds(dt: DateTime): string {
  if (dateInvalid(dt)) {
    return '';
  }
  return `${shortDate(dt)} ${timeWithSeconds(dt)}`;
}

export function longDateTime(dt: DateTime): string {
  if (dateInvalid(dt)) {
    return '';
  }
  return `${longDate(dt)} ${timeNoSeconds(dt)}`;
}

export function longDateTimeWithSeconds(dt: DateTime): string {
  if (dateInvalid(dt)) {
    return '';
  }
  return `${longDate(dt)} ${timeWithSeconds(dt)}`;
}
