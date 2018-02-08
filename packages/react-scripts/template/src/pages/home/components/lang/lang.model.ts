const LangModel = {
  namespace: 'lang',
  state: { site: {} },
  effects: {},
  reducers: {
    save: (state: any, { payload }: any) => ({ ...state, ...payload })
  }
};

export default LangModel;
