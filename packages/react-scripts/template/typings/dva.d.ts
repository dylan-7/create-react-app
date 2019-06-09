// tslint:disable-line
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.mp3';

declare module 'dva' {
  import { Connect } from 'react-redux'; // tslint:disable-line
  import { History } from 'history'; // tslint:disable-line
  export interface Dva {
    model: (p: any) => void;
    router: (p: any) => any;
    start: (root: HTMLElement | null) => any;
    _store: {
      dispatch: Dispatch;
    };
  }

  export interface Model {
    namespace: string;
    state: object;
    subscriptions?: {
      setup({ history, dispatch }: SubscriptionAPI): void;
    };
    effects?: object;
    reducers?: object;
  }
  export interface Action {
    type: any;
    payload?: object;
  }
  export interface Dispatch {
    <A extends Action>(action: A): Promise<any>;
    <A extends Action>(action: A): A;
  }

  export declare const connect: Connect;

  export interface SubscriptionAPI {
    history: History;
    dispatch: Dispatch;
  }
  export interface EffectsCommandMap {
    put: <A extends Action>(action: A) => any;
    call: Function;
    select: Function;
    take: Function;
    cancel: Function;
    [key: string]: any;
  }

  const _dva: (p: { history: any }) => Dva;
  export default _dva;
}
