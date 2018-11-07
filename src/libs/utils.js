/**
 * author     dark
 * date       18/11/7
 */
'use strict';

export const getQueryParameters = function (str) {
  return (str || document.location.search).replace(/(^\?)/, '').split('&').reduce(function (o, n) {
    n = n.split('=');
    o[n[0]] = n[1];
    return o;
  }, {});
};
