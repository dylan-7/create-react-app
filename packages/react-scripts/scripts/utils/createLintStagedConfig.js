// lint-staged in package.json

'use strict';

module.exports = (resolve, rootDir, isEjecting) => {
  const config = {
    "src/**/*.{ts,tsx,js,jsx}": [
      "prettier --print-width 120 --single-quote --trailing-commas all --parser typescript --write",
      "tslint --fix",
      "git add"
    ],
    "*.scss": [
      "prettier --parser sass --print-width 120 --write",
      "stylelint --fiex",
      "git add"
    ],
    "yarn.lock": [
      "git rm --cached"
    ]
  };
  return config;
};
