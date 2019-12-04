import { DateTime } from 'luxon';

export function parse(stringOrLuxonDate: DateTime | string, customFormat?: string): DateTime {
  if (!stringOrLuxonDate) {
    return DateTime.invalid('Null Date');
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  if (stringOrLuxonDate.toJSDate) {
    return stringOrLuxonDate as DateTime;
  }
  const strDate = stringOrLuxonDate as string;
  const isoDate = DateTime.fromISO(strDate);
  if (isoDate.isValid || !customFormat) {
    return isoDate;
  }
  return DateTime.fromFormat(strDate, customFormat);
}
