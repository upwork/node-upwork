Node.JS bindings for Upwork API
===========

[![License](http://img.shields.io/packagist/l/upwork/php-upwork.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![npm](https://img.shields.io/npm/v/upwork-api.svg)](https://www.npmjs.com/package/upwork-api)
[![GitHub release](https://img.shields.io/github/release/upwork/node-upwork.svg)](https://github.com/upwork/node-upwork/releases)
[![Build Status](https://travis-ci.org/upwork/node-upwork.svg)](https://travis-ci.org/upwork/node-upwork)

# Introduction
This project provides a set of resources of Upwork API from http://developers.upwork.com based on OAuth 1.0a.

# Features
These are the supported API resources:

* My Info
* Custom Payments
* Hiring
* Job and Freelancer Profile
* Search Jobs and Freelancers
* Organization
* Messages
* Time and Financial Reporting
* Metadata
* Snapshot
* Team
* Work Diary
* Activities

# License

Copyright 2015 Upwork Corporation. All Rights Reserved.

node-upwork is licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## SLA
The usage of this API is ruled by the Terms of Use at:

    https://developers.upwork.com/api-tos.html

# Application Integration
To integrate this library you need to have:

* Node.JS >= 0.9
* npm >= 1.3.0

## Example
In addition to this, a full example is available in the `example` directory. 
This includes `example.js` that gets an access token and requests the data
for applications that are not web-based.
It also describes how to use your own client together with this Upwork library.

## Installation

To install the library please run the following command:

    $ npm install upwork-api

## Quick start

Before you start using Upwork API, you will need to obtain your pair of API keys.
Visit the `Upwork API documentation Center <https://developers.upwork.com/#authentication_oauth-10>`_
for full details.

1. `example/example.js` to `myapp.js`
2. open `myapp.js `and type the consumerKey and consumerSecret that you previously got from the API Center.

***That's all. Run your app as `node myapp.js` and have fun.***

## Documentation

Please use YUIDoc to build the local copy of the documentation or use http://upwork.github.io/node-upwork/.
