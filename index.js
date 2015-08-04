'use strict';

var express = require('express');
var kraken = require('kraken-js');
require('dotenv').load()
var session = require('cookie-session')
var lusca = require('lusca');


var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        next(null, config);
    }
};

app = module.exports = express();

app.use(session({
  name: 'session',
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2, process.env.SESSION_KEY3],

}))
app.use(lusca({
    csrf: false,
    csp: { /* ... */},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: {maxAge: 31536000, includeSubDomains: false, preload: false},
    xssProtection: false
}));

app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
