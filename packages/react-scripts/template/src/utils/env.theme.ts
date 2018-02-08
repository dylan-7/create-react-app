import { parse } from 'querystring';
export function getThemeByName(name: string = '') {
  let theme;
  switch (name.toLowerCase()) {
    default:
      theme = '1';
      break;
  }
  return theme;
}

// 从 setting 读取主题配置并本地缓存
// 开发时以 url 传参优先
// 生产时以 settings 优化
const defaultTheme = '1';
export function initTheme(settingTheme: string, isDevTheme: boolean) {
  const urlParams = parse(location.search.slice(1)) as any;
  let theme;
  if (isDevTheme) {
    if (urlParams.theme) {
      theme = urlParams.theme;
      window.localStorage.setItem('_theme', theme);
    } else {
      theme = window.localStorage.getItem('_theme') || defaultTheme;
    }
  } else {
    theme = getThemeByName(settingTheme) || urlParams.theme || window.localStorage.getItem('theme') || defaultTheme;
    window.localStorage.setItem('theme', theme);
  }
  return theme;
}
