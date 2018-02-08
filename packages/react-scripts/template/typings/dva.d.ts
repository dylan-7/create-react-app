declare module 'dva' {
  export { connect, Dispatch } from 'react-redux'; // tslint:disable-line
  export interface Dva {
    model: (p: any) => void;
    router: (p: any) => any;
    start: (root: HTMLElement|null) => any;
    _store: {
      dispatch: Dispatch<any>;
    };
  }
  const _dva: (p: { history: any }) => Dva;
  export default _dva;
}

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