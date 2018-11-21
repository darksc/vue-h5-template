/**
 * author     dark
 * date       18/11/7
 */
'use strict';

/**
 * 获取 url query 参数
 */
const getQueryParameters = function (str) {
  return (str || document.location.search).replace(/(^\?)/, '').split('&').reduce(function (o, n) {
    n = n.split('=');
    o[n[0]] = n[1];
    return o;
  }, {});
};

/**
 * 获取 cookie 参数
 * @param name
 * @returns {string}
 */
const getCookie = function (name) {
  let strcookie = document.cookie; // 获取cookie字符串
  let arrcookie = strcookie.split('; ').reverse(); // 分割
  // 遍历匹配
  // alert('cookie:' + document.cookie)
  for (let i = 0; i < arrcookie.length; i++) {
    let arr = arrcookie[i].split('=');
    if (arr[0] === name) {
      return arr[1];
    }
  }
  return '';
};

/**
 * 判断 android
 * @returns {boolean}
 */
const isAndroid = function () {
  let u = navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // android终端或者uc浏览器
};

/**
 * 判断 iPhone x
 * @returns {(boolean | number) | boolean}
 */
const isX = function () {
  // iPhone X、iPhone XS
  let isIPhoneX = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812;
  // iPhone XS Max
  let isIPhoneXSMax = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896;
  // iPhone XR
  let isIPhoneXR = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896;
  return isIPhoneX || isIPhoneXSMax || isIPhoneXR;
};

/**
 * 节目预告时间
 * @param {*} endTime 节目截止时间戳
 */
const livePreTime = function (endTime) {
  let now = new Date();
  let nowTime = now.getTime();
  let leftTime = endTime - nowTime;
  if (leftTime > 0) {
    let leftDay = Math.floor(leftTime / 1000 / 60 / 60 / 24);

    let end = new Date(endTime);
    let month = end.getMonth() + 1;
    let days = end.getDate() >= 10 ? end.getDate() : '0' + end.getDate();
    let hours = end.getHours() >= 10 ? end.getHours() : '0' + end.getHours();
    let minutes = end.getMinutes() >= 10 ? end.getMinutes() : '0' + end.getMinutes();

    let nowWeek = now.getDay();

    if (leftDay === 0) {
      if (nowWeek === end.getDay()) {
        return '今天 ' + hours + ':' + minutes;
      } else {
        return '明天 ' + hours + ':' + minutes;
      }
    } else if (leftDay === 1) {
      if (nowWeek === new Date(endTime - (24 * 60 * 60 * 1000)).getDay()) {
        return '明天 ' + hours + ':' + minutes;
      } else {
        return '后天 ' + hours + ':' + minutes;
      }
    } else if (leftDay === 2) {
      if (nowWeek === new Date(endTime - (2 * 24 * 60 * 60 * 1000)).getDay()) {
        return '后天 ' + hours + ':' + minutes;
      } else {
        return month + '月' + days + '日 ' + hours + ':' + minutes;
      }
    } else {
      return month + '月' + days + '日 ' + hours + ':' + minutes;
    }
  } else {
    return '活动已结束';
  }
};

/**
 * 关闭当前页面
 */

const close = function () {
  if (isAndroid()) {
    // android
    window.android.close();
  } else {
    // ios
    window.webkit.messageHandlers.close.postMessage(0);
  }
};

/**
 * 倒计时方法，定时器的名称需为timer
 * @param {*} endTime 截止时间，单位毫秒
 */
const countTime = (endTime, timer) => {
  let now = new Date();
  let nowTime = now.getTime();
  let leftTime = endTime - nowTime;
  let h, m, s;
  if (leftTime > 0) {
    h = Math.floor(leftTime / 1000 / 60 / 60);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
  } else {
    h = '00';
    m = '00';
    s = '00';
    clearInterval(timer);
    return {
      h, m, s
    };
  }
  // 倒计时赋值
  return {
    h: h >= 10 ? h : '0' + h,
    m: m >= 10 ? m : '0' + m,
    s: s >= 10 ? s : '0' + s
  };
};

/**
 * 设置日历提醒
 * @param _info
 */
const calendar = function (_info) {
  // let info = {
  //   'title': 'xxxx', // 标题
  //   'start': 15421716000000, // 开始时间戳 (毫秒)
  //   'end': 15421725000000, // 结束时间戳 (毫秒)
  //   'notes': '备注',
  //   'url': 'chongding://open/home', // 要跳转的URL
  //   'relative': -5 // 提前时间(秒)
  // };

  _info = JSON.stringify(_info);
  if (isAndroid()) {
    // Android
    window.android.calendar(_info);
  } else {
    // iOS
    window.webkit.messageHandlers.calendar.postMessage(_info);
  }
};

export {
  getQueryParameters,
  isAndroid,
  isX,
  getCookie,
  livePreTime,
  close,
  countTime,
  calendar
};
