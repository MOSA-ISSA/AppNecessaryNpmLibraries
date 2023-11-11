# App Necessary Npm Libraries

pack of my most common and used NPM libraries.

## Table of Contents

- [App Necessary Npm Libraries](#App-Necessary-Npm-Libraries)
  - [Table of Contents](#table-of-contents)
  - [NPM libraries](#NPM-libraries)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## NPM libraries

2. [yarn](#yarn)
1. [React Navigation](#React_Navigation)
-
2.
3.

## Features

List the key features of your project. You can use bullet points for this section.

- Feature 1
- Feature 2
- ...

## Installation

### yarn
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) is a package manager for JavaScript that aims to be fast, reliable, and secure. It was developed by Facebook in collaboration with other open-source contributors and is designed to be a more efficient alternative to the npm (Node Package Manager) that comes bundled with Node.js.

```bash
# yarn installation commands
npm install --global yarn
```
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
then [if you don't have auto linking find]() <ReactPackage> and add: 
```bash
#protected List<ReactPackage> getPackages() {
   #...
   packages.add(new new VectorIconsPackage());
# return packages;
#}
```
[vector-icons example](./src/VectorIcons.js)

### React Navigation
[React Navigation](https://reactnavigation.org/) is a powerful library for routing and navigation in Expo and React Native apps. It provides seamless navigation experiences, platform-specific look-and-feel, and smooth animations.

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





Provide instructions on how to install and set up your project. Include any dependencies and the steps needed to get your project up and running.

```bash
# Example installation commands
npm install
```