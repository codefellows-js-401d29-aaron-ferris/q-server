'use strict';
/**
 * Model Finder Middleware
 * @module filewriter/server.js
 */

 /**
 * monitors evens on files and database
 * Sets them up for other files to emit and 
 */
const Q = require('@nmq/q/server');
Q.start();

const db = new Q('database')

db.monitorEvent('create')
db.monitorEvent('update')
db.monitorEvent('read')
db.monitorEvent('delete')
db.monitorEvent('error')


