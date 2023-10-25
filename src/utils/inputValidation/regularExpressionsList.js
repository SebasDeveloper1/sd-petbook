/* eslint-disable no-useless-escape */
export const regExpUsername = /^[a-z0-9_s]{4,16}$/;
export const regExpNames = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
export const regExpCell = /^[0-9_s]{10,40}$/;
export const regExpEmail =
  /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
export const regExpCcp = /^\+?\d{1,4}$/;
export const regExpCountry = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
export const regExpDeparment = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
export const regExpCity = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
export const regExpAddress = /^[a-zA-ZÀ-ÿ0-9\s\.\,\#\-\/\º\ª\(\)]+$/;
export const regExpColor = /^[a-zA-ZÀ-ÿ\s-/]+$/;
export const regExpSpecie = /^[a-zA-ZÀ-ÿ\s]+$/;
export const regExpWeight = /^[0-9.]{1,5}$/;
export const regExpHeight = /^[0-9.]{1,5}$/;
