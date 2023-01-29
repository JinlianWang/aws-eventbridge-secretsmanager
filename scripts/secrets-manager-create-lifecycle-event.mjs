#!/usr/bin/env zx

const fs = require('fs');
const path = require('path');

const secretName = `${new Date().getTime()}-secret`;

$`aws secretsmanager create-secret --name ${secretName}`;

fs.appendFileSync(path.join(__dirname, 'secrets.txt'), `${secretName}\n`);