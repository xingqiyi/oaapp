module.exports = {
    "env": {
        "es6": true,

        "browser": true,
        "node": true
    },

    "parser": "babel-eslint",

    // "extends": "eslint:recommended",
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:import/errors"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "modules": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
        // ,
        // "react-native"
    ],
    "rules": {//0,1,2:off warn error

        "react/display-name": [0],


        "no-alert": 0,

        "no-console": 0,

        "no-unused-vars": 1,//不能有声明后未被使用的变量或参数 warn

        "linebreak-style": 0,

        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
, // 这里设置可能用到的全局变量
"globals": {
  "window": true,
  "fetch": true,
  "__DEV__": true,
  "__APP__": true,
  "__ANDROID__": true,
  "__IOS__": true
}

};