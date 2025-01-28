/**
 * @fileoverview Utils
 * @module Utils
 * @requires dayjs
 * @requires localStorage
 * @requires JSON
 * @requires Date
 * This file contains utility functions that are used throughout the application.
 */

/* eslint-disable */

import datjs from "dayjs";

/**
 * Format date to YYYY/MM/DD from Date or string
 * @param date Date | string, date object to format
 * @returns string
 */
export const FormatTime = (date: Date | string) => {
  return datjs(date).format("YYYY/MM/DD hh:mm");
};

/**
 * Get item from localStorage
 * @param key string, key of the item to get
 * returns any|null
 */
export const localGetItem = (key: string): any => {
  let data_str = localStorage.getItem(key);
  if (data_str) {
    return JSON.parse(data_str);
  }
  return null;
};

/**
 * Set item in localStorage
 * @param key
 * @param value
 * @returns void
 */
export const localSetItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Randomly generate an id for a memo item
 * @returns number
 */
export const geneId = (): number => {
  return Math.floor(Math.random() * 939874);
};

/**
 * Simulate a http request
 */
export const ImitateHttp = (
  fun: (s: Function, f: Function) => void,
  timer = 1000
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => fun(resolve, reject), timer);
  });
}
