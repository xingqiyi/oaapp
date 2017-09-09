# react-navigation-antd

## react-native

 

```
node4+ npm3+

npm i react-native-cli -g
npm i
npm start

react-native run-ios // ios

react-native run-android // android
```



## use antd-mobile in react-native project

1. install dep

  ```bash
  $ npm install antd-mobile --save
  $ npm install babel-plugin-import --save-dev
  ```
2. config `.babelrc`

  ```json
  {"plugins": [["import", { "libraryName": "antd-mobile" }]]}
  ```



 ## Application Architecture

- [Microsoft Code Push](https://github.com/Microsoft/react-native-code-push) for dynamic update.
- [Redux](https://github.com/reactjs/redux) is a predictable state container for reading application, together with [React Native](https://github.com/facebook/react-native).
- [Redux-Saga](https://github.com/yelouafi/redux-saga/) is a library that aims to make side effects in reading application easier and better.
- [react-navigation](https://github.com/react-community/react-navigation) is an extensible yet easy-to-use navigation solution, can also be used across React and React Native projects allowing for a higher degree of shared code.
- [Jest](https://facebook.github.io/jest/) for testing [React Native](https://github.com/facebook/react-native) components and UT.
- [Eslint](https://github.com/eslint/eslint) is a tool for identifying and reporting on patterns found in reading application code.
- [react-native-exceptions-manager](https://github.com/Richard-Cao/react-native-exceptions-manager) for handling crashes in release version.


## use eslint in react-native

1. init eslint
```bash
eslint --init
```

## Development Workflow

### Run Test

```
npm test
```

### Format Code

```
npm run format
```

### Run Lint

检查 src/ 以及 更目录 .js文件

```shell
npm run lint
```


