module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    // "extends": "eslint:recommended",
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:import/errors"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
        // ,
        // "react-native"
    ],
    "rules": {
        "no-alert": 0,

        "no-console": 0,

        "no-unused-vars": 1,//不能有声明后未被使用的变量或参数



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
};