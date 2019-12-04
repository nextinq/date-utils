// @ts-nocheck
import { DateTime } from 'luxon';
import { parse } from '../index';

describe('parse', () => {
  it('Null input', () => {
    const result = parse();
    expect(result.isValid).toBeFalsy();
    expect(result.invalidReason).toEqual('Null Date');
  });
  it('Invalid String', () => {
    const result = parse('a');
    expect(result.isValid).toBeFalsy();
    expect(result.invalidReason).toEqual('unparsable');
  });
  it('Invalid ISO String', () => {
    const result = parse('2001-13-30');
    expect(result.isValid).toBeFalsy();
    expect(result.invalidReason).toEqual('unit out of range');
  });
  it('Valid ISO String', () => {
    const result = parse('2001-12-30');
    expect(result.isValid).toBeTruthy();
  });
  it('Invalid custom format', () => {
    const result = parse('29. 12. 1900', 'yyyy');
    expect(result.isValid).toBeFalsy();
    expect(result.invalidReason).toEqual('unparsable');
  });
  it('Valid custom format', () => {
    const result = parse('29. 12. 1900', 'dd. MM. yyyy');
    expect(result.isValid).toBeTruthy();
  });
});
