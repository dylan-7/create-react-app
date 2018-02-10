import { Dva } from "dva";

declare module 'dva' {
  import { Dispatch, Connect } from 'react-redux'; // tslint:disable-line
  import { History } from 'history'; // tslint:disable-line
  export interface Dva {
    model: (p: any) => void;
    router: (p: any) => any;
    start: (root: HTMLElement | null) => any;
    _store: {
      dispatch: Dispatch<any>;
    };
  }

  export interface Model {
    namespace: string;
    state: object;
    subscriptions: {
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
    <A extends Action>(action: A): Promise<any> | void;
  }

  export declare const connect: Connect;

  export interface SubscriptionAPI {
    history: History;
    dispatch: Dispatch<any>;
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