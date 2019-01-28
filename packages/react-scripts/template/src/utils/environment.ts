import { initTheme } from './env.theme';

const isDev = /^(192\.168|127\.0\.0\.1|localhost)/.test(window.location.host);
const isDevTheme = isDev;
const hasSettings = window.settings && window.settings.domain;
// 所有配置从 settings 中来，如果 settings 为 undefined 则取默认值以防null错误
const {
  base = { maintaining: false, site_status: false, maintaining_start_time: '', maintaining_end_time: '' },
  domain = location.host,
  ssl = location.protocol === 'https:',
  site = {
    title: '',
    sport: '//mkt.sbapi8888.com/?lang=cs',
    lang: 'zh-CN',
    copyright: '',
    theme: 'purplestage'
  },
  logo = {
    normal: ''
  }
} =
  window.settings || {};
// 站点标题
document.title = site.title;
const https = ssl ? 'https:' : 'http:';
const environment = {
  hasSetting: hasSettings, // 没设置则跳错误页

  hostAPI: 'http://localhost:8020', // `${https}//api.${domain}`, // ajax json
  wwwimgurl: `${https}//res.${domain}`, // 资源站图片
  sport: site.sport, // iframe 外链

  theme: initTheme(site.theme, isDevTheme), // 主题值为：'1','2'...
  locale: site.lang, // 本地语言
  maintaining: base.site_status === true || base.maintaining === true, // 维护中
  maintaining_start_time: base.maintaining_start_time, // 维护中
  maintaining_end_time: base.maintaining_end_time, // 维护中
  logo: logo.normal, // LOGO
  copyrights: site.copyright, // © 版权所有

  tokenName: 'joys_token', // sessionStorage Key
  expiration: 'joys_exp', // sessionStorage Key
  loginInfo: 'joys_loginInfo', // sessionStorage Key
  app_link: 'joys_app_link', // sessionStorage Key

  dispatch: ((action: { type: string; payload?: any }) => {
    console.warn('this = dva()._store.dispatch');
  }) as any, // 用于 utils 文件夹中的工具方法,

};
export default environment;

declare global {
  interface Window {
    settings: {
      domain: string;
      ssl: boolean;
      site: {
        title: string;
        theme: string;
        lang: string;
        copyright: string;
        favicon: string;
        sport: string;
      },
      base: {
        maintaining: boolean;
        site_status: boolean;
        maintaining_start_time: string;
        maintaining_end_time: string;
      },
      logo: {
        normal: string;
        small: string;
        medium: string;
        large: string;
      }
    }
  }
}

