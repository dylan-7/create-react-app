# joys-react-scripts

This package includes scripts and configuration used by Create React App.
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

```
  create-react-app my-app --scripts-version=joys-react-scripts
```

Then `cd my-app`, `yarn eject`, `yarn start` can start APP normally.

## FAQ 

**Prompt type error at startup**

```
Type error: Argument of type '({ history }: SubscriptionAPI) => Element' is not assignable to parameter
 of type 'Router'.
  Types of parameters '__0' and 'api' are incompatible.
    Type 'RouterAPI | undefined' is not assignable to type 'SubscriptionAPI'.
      Type 'undefined' is not assignable to type 'SubscriptionAPI'.  TS2345

    22 | };
    23 |
  > 24 | app.router(router);
       |            ^
    25 | app.start(document.getElementById('root'));
    26 | registerServiceWorker();
    27 |
```

After you create the app, you need to execute `yarn eject` and start the app

**this.htmlWebpackPlugin.getHooks is not a function**

```
"html-webpack-plugin": "^4.0.0-beta.2"
```


## Changelog

V1.2.41

* Upgrade to the latest dependencies
