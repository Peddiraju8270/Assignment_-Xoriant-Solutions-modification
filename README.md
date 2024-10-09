# Mobile Automation QA

This project automates the login functionality of a mobile app (Android & iOS) using WebdriverIO, Appium, and Cucumber BDD.

## Prerequisites

1. **Node.js** (v14 or later)
2. **Appium** (v2.x)
3. Android Emulator or Real Android Device
4. iOS Simulator or Real iOS Device

## Setup

1. Install dependencies:
   ```bash
   npm install
2. Start Appium server:
   ```bash
   appium
3. Run Android tests:
   ```bash
   npx wdio wdio.android.conf.js
4. Run iOS tests:
   ```bash
   npx wdio wdio.ios.conf.js
5. Generate and view the Allure Report:
   ```bash
   npm run allure-report


