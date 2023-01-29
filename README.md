#Workflow course assignment

[![Automated E2E Testing](https://github.com/ohjenssen/workflow-ca/actions/workflows/e2e-test.yml/badge.svg?branch=workflow-automated-testing)](https://github.com/ohjenssen/workflow-ca/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/ohjenssen/workflow-ca/actions/workflows/unit-test.yml/badge.svg?branch=workflow-automated-testing)](https://github.com/ohjenssen/workflow-ca/actions/workflows/unit-test.yml)


Link to deployment site:
https://ohjenssen.github.io/workflow-ca/

Built with:
- HTML
- CSS
- JavaScript
- Bootstrap
- SASS

Getting started

Installing 
1. Clone the repo
- git clone --branch workflow https://github.com/ohjenssen/workflow-ca.git

2. Install dependencies (write in terminal)
- npm i 

3. Build production files
- npm run build

4. Other commands that are useful when developing
- npm run start (sass live server)
- npm run testing-cypress (open and run testing with Cypress)
- npm run test-unit (run tests with jest)

Formatting
Prettier
To run Prettier write:
- npm run format

Eslint
To run esling write:
- npm run lint-fix
