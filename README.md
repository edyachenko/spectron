# Spectron

#####Install libs according to tutorials on 
[the project on GitHub](https://www.electronjs.org/docs/tutorial/using-selenium-and-webdriver)

In order to test with chromedriver, run chromedriver file from node_modules/.bin/chromedriver
######This info is also presented on electron api docs

###To run Spectron + Selenium WD test, makesure chromedriver server is up and running,
then run

```mocha run test/test_webdriver```

###To run Spectron only test, makesure chromedriver server is shut down,
then run

```mocha run test/test_spectron```
//    "testm": "node ./node_modules/mocha/bin/_mocha",
