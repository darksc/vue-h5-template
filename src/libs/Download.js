/**
 * author     dark
 * date       18/10/31
 */
'use strict';
import Parser from 'ua-parser-js';

export default class Download {
  constructor () {
    this.parser = new Parser();
    this.os = this.parser.getOS();
  }

  getQueryString = (name) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  };

  getApp = () => {
    console.log(JSON.stringify(this.parser.getOS(), null, 2));
    let channel = this.getQueryString('c');
    console.log('参数', channel);
    let url;
    if (this.os.name === 'Android') {
      url = 'http://s2.chongdingdahui.com/apk/' + channel + '.apk';
      console.log('Android download', 'url', url);
      window.location.href = url;
    } else {
      url = 'https://itunes.apple.com/cn/app/apple-store/id1323452054?pt=1347619&ct=cddh&mt=8';
      console.log('IOS download', 'url', url);
      window.location.href = url;
    }
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else {
      console.log('浏览器不支持地理定位');
    }
  };

  showPosition = (position) => {
    let lat = position.coords.latitude; // 纬度
    let lag = position.coords.longitude; // 经度
    console.log('纬度:' + lat + ',经度:' + lag);
  };

  showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('定位失败,用户拒绝请求地理定位');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('定位失败,位置信息是不可用');
        break;
      case error.TIMEOUT:
        console.log('定位失败,请求获取用户位置超时');
        break;
      case error.UNKNOWN_ERROR:
        console.log('定位失败,定位系统失效');
        break;
    }
  };
}
