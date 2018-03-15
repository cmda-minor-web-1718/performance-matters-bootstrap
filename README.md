# Performance matters

## Project setup

This project serves an adapted version of the [Bootstrap documentation website](http://getbootstrap.com/). It is based on the [github pages branche of Bootstrap](https://github.com/twbs/bootstrap/tree/gh-pages).

Differences from actual Bootstrap documentation:

- Added custom webfont
- Removed third party scripts
- The src directory is served with [Express](https://expressjs.com/).
- Templating is done with [Nunjucks](https://mozilla.github.io/nunjucks/)

## Getting started

- Install dependencies: `npm install`
- Serve: `npm start`
- Expose localhost: `npm run expose`

## Master branche
In the master branche you can find the optimized site. For each feature I made a new branche and in the end I merged them with the master branche. Check the [AUDIT.md](https://github.com/s44s/performance-matters/blob/master/AUDIT.md) file to find out more about the process. Overall, you can see the changes here:

Before:
![alt text](https://github.com/s44s/performance-matters/blob/master/src/images/overallbefore.png "Screen")

After:
![alt text](https://github.com/s44s/performance-matters/blob/master/src/images/overall-after.png "Screen")
