const request = require("supertest");
const chai = require("chai");
const { app } = require("../src/api/index");
const { config } = require("../src/config");

const { version } = config;

global.expect = chai.expect;
global.request = request(app);
global.config = config;
global.version = version;
