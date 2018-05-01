// lint-staged in package.json

'use strict';

module.exports = (resolve, rootDir, isEjecting) => {
  const config = {
    "src/**/*.{ts,tsx,js,jsx}": [
      "prettier --print-width 100 --single-quote --trailing-commas all --parser typescript --write",
      "tslint --fix",
      "git add"
    ],
    "yarn.lock": [
      "git rm --cached"
    ]
  };
  return config;
};
