import { parse } from 'querystring';

export function getUpperCaseLocale(str: string): string {
  if (str == null) {
    str = 'zh-CN';
  }
  return str.slice(0, 2).toLowerCase() + '-' + str.slice(3).toUpperCase();
}

export function initLocal(settingLang: string) {
  const urlParams = parse(location.search.slice(1)) as any;
  const urlLocal = urlParams.locale;
  const cacheLocal = window.localStorage.getItem('locale');
  const settingLocal = getUpperCaseLocale(settingLang);
  return urlLocal || settingLocal || cacheLocal;
}

export function initCode() {
  const urlParams = parse(location.search.slice(1)) as any;
  const urlCode = urlParams.code;
  return urlCode ;
}