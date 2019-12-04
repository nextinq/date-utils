import { DateTime } from 'luxon';
import { formats } from '../index';

const {
  shortDateTime,
  longDateTime,
  shortDateTimeWithSeconds,
  longDateTimeWithSeconds,
  shortDate,
  longDate,
  timeWithSeconds,
  timeNoSeconds,
  timeFullPrecision
} = formats;

describe('formats', () => {
  describe('formats - cs-CZ locale', () => {
    const dt = DateTime.fromISO('2018-07-29T15:20:31.234').setLocale('cs-CZ');
    const invalidDate = DateTime.fromISO('2018-15-29T15:20:31.234').setLocale('cs-CZ');
    it('invalid date format', () => {
      expect(shortDateTime(invalidDate)).toEqual('');
    });
    it('shortDateTime - cs-CZ', () => {
      expect(shortDateTime(dt)).toEqual('29. 7. 2018 15:20');
    });
    it('longDateTime - cs-CZ', () => {
      expect(longDateTime(dt)).toEqual('29. července 2018 15:20');
    });
    it('shortDateTimeWithSeconds - cs-CZ', () => {
      expect(shortDateTimeWithSeconds(dt)).toEqual('29. 7. 2018 15:20:31');
    });
    it('longDateTimeWithSeconds - cs-CZ', () => {
      expect(longDateTimeWithSeconds(dt)).toEqual('29. července 2018 15:20:31');
    });
    it('shortDate - cs-CZ', () => {
      expect(shortDate(dt)).toEqual('29. 7. 2018');
    });
    it('longDate - cs-CZ', () => {
      expect(longDate(dt)).toEqual('29. července 2018');
    });
    it('timeNoSeconds - cs-CZ', () => {
      expect(timeNoSeconds(dt)).toEqual('15:20');
    });
    it('timeWithSeconds - cs-CZ', () => {
      expect(timeWithSeconds(dt)).toEqual('15:20:31');
    });
    it('timeFullPrecision - cs-CZ', () => {
      expect(timeFullPrecision(dt)).toEqual('15:20:31.234');
    });
  });
});
