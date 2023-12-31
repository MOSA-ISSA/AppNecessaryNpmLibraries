# App Necessary Npm Libraries

pack of my most common and used NPM libraries.

## Table of Contents

- [App Necessary Npm Libraries](#App-Necessary-Npm-Libraries)
  - [Table of Contents](#table-of-contents)
  - [NPM libraries](#NPM-libraries)
  - [Installation](#installation)
  <!-- - [Contact](#contact) -->

## NPM libraries

1. [yarn](#yarn)
2. [react-native-vector-icons](#react-native-vector-icons)
3. [React Navigation](#React-Navigation)
4. [Tab navigation](#Tab-navigation)
5. [Drawer navigation example](#Drawer-navigation-example)
6. [lottie-react-native](#lottie-react-native)

## Installation

### [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

<img src="./assets/yarn.png" alt="yarn logo" style="float: right; margin: 10px;" width="100">


[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) is a package manager for JavaScript that aims to be fast, reliable, and secure. It was developed by Facebook in collaboration with other open-source contributors and is designed to be a more efficient alternative to the npm (Node Package Manager) that comes bundled with Node.js.

```bash
# yarn installation commands
npm install --global yarn
```
#

### [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```bash
# react-native-vector-icons installation commands
npm install --save react-native-vector-icons
```
Edit [build.gradle](./android/app/build.gradle) "android/app/build.gradle" and add:

```bash
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```
and in the dependencies add:

```bash
# dependencies {
#...
   implementation project(':react-native-vector-icons')
#}
```

Edit the [settings.gradle](./android/settings.gradle) "android/settings.gradle" and add:

```bash
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

Edit your [MainApplication.java](./android/app/src/main/java/) './android/app/src/main/java/MainApplication.java' and add 

```bash
# package ...
   import com.oblador.vectoricons.VectorIconsPackage;
```
then [if you don't have auto linking find]() ReactPackage and add: 
```bash
#protected List<ReactPackage> getPackages() {
   #...
   packages.add(new new VectorIconsPackage());
# return packages;
#}
```
[vector-icons example](./src/VectorIcons.js)

#

<img src="./assets/react-navigation.png" alt="navigation" style="float: right; margin: 10px;" width="200">

### [React Navigation](https://reactnavigation.org/)



[React Navigation](https://reactnavigation.org/) is a powerful library for routing and navigation in React Native apps. It provides seamless navigation experiences, platform-specific look-and-feel, and smooth animations.

```bash
# React Navigation installation commands
yarn add @react-navigation/native
```
then [react-native-screens](https://github.com/software-mansion/react-native-screens) and [react-native-safe-area](https://github.com/th3rdwave/react-native-safe-area-context) and [react-navigation/native-stack](https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack)

```bash
# React Navigation installation commands
yarn add react-native-screens react-native-safe-area-context @react-navigation/native-stack
```
[Navigation example](./src/Navigation.js)

#

<img src="./assets/tabs.gif" alt="tabs logo" style="float: right; margin: 10px;" width="200">

### [Tab navigation](https://reactnavigation.org/docs/tab-based-navigation/)

```bash
# add to your project
yarn add @react-navigation/bottom-tabs
```
[Tab navigation example](./src/TabNavigation.js)

#

<img src="./assets/drawer.gif" alt="drawer" style="float: right; margin: 10px;" width="200">

### [Drawer navigation example](https://reactnavigation.org/docs/drawer-based-navigation)

```bash
# install
yarn add @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```
Add react-native-reanimated/plugin plugin to your [babel.config.js](./babel.config.js).
```bash
#module.exports = {
    #presets: [
      #... // don't add it here :)
    #],
    #plugins: [
      #...
      'react-native-reanimated/plugin',
    #],
  #};
```

then in the top of [index.js](./index.js) add:
```bash
import 'react-native-gesture-handler';
```
[Drawer navigation example](./src/DrawerNavigation.js)

#

<img src="./assets/lotti.gif" alt="lotti" style="float: right; margin: 3px;" width="100">

### [lottie-react-native](https://www.npmjs.com/package/lottie-react-native)
Lottie component for adding animation in your app

```bash
# add to your project
yarn add lottie-react-native
```
[lottie example](./src/Animation.js)

#

