// lint-staged in package.json

'use strict';

module.exports = (resolve, rootDir, isEjecting) => {
  const config = {
    "src/**/*.{ts,tsx,js,jsx}": [
      "tslint --fix",
      "prettier --print-width 120 --single-quote --trailing-commas all --parser typescript --write",
      "git add"
    ],
    "yarn.lock": [
      "git rm --cached"
    ]
  };
  return config;
};
