[![License: MIT](https://img.shields.io/npm/l/@silverbirder/rminc.svg)](https://opensource.org/licenses/MIT)
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![npm download](https://img.shields.io/npm/dt/@silverbirder/rminc.svg)](https://www.npmjs.com/package/@silverbirder/rminc)
[![npm version](https://img.shields.io/npm/v/@silverbirder/rminc)](https://www.npmjs.com/package/@silverbirder/rminc)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@silverbirder/rminc)](https://www.npmjs.com/package/@silverbirder/rminc)
[![github action](https://img.shields.io/github/workflow/status/Silver-birder/rMinc/main)](https://github.com/Silver-birder/rMinc/actions)
[![Coverage Status](https://coveralls.io/repos/github/Silver-birder/rMinc/badge.svg?branch=master)](https://coveralls.io/github/Silver-birder/rMinc?branch=master)
[![twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fsilver_birder)](https://twitter.com/silver_birder)

# rMinc
rMinc is the Google Apps Script Library that register Mail in Calendar.
![overview](https://res.cloudinary.com/silverbirder/image/upload/v1581769421/rMinc/rMinc_overview.png)

1. Get the email.
    1. target the some services.
        1. [Amazon](https://www.amazon.co.jp/)
        1. [TOHO CINEMAS](https://www.tohotheater.jp/)
        1. [SHOKUTAKU BIN](https://shokutakubin.com/)
        1. Your favorite services
           1. you can create the custom mail rule (see [sample/sample.js](https://github.com/Silver-birder/rMinc/blob/master/sample/sample.js)).
1. Register the calendar event.
    1. Set the value of below.
        1. Title
        1. Event start and end date
        1. Location
        1. Description

Example from my Amazon mail is below.
![example](https://res.cloudinary.com/silverbirder/image/upload/v1581760683/rMinc/rMinc_sample.png)

# Use By Google Apps Script

1. Access the Your [Google Apps Script](https://script.google.com).
1. Add the this library. (CaAT)
   1. API ID is  **MdL3uTK-myFlfF1-Ls1C1wiIH6OImGALS** 
1. Use it like [sample/sample.js](https://github.com/Silver-birder/rMinc/blob/master/sample/sample.js)

# Use By TypeScript

This library is published by npm.  
[@silverbirder/rminc](https://www.npmjs.com/package/@silverbirder/rminc)

```
$ npm install @silverbirder/rminc
```

# Motivation
I often shop at Amazon([amazon.co.jp](https://www.amazon.co.jp/)).

After purchasing the product, I will receive an email when the product will arrive.
However, it was **very troublesome to check when it arrived** .

So, RMinc is a tool that monitors Amazon mails sent to GMail and **automatically registers them in GCalendar** .

# Other
@me: [twitter](https://twitter.com/silver_birder)  
Please contact @me if you have anything.
