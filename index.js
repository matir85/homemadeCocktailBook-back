"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
require("express-async-errors");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])({
    origin: 'http://localhost:3000'
}));
app.use((0, express_1.json)());
app.listen(3001, function () {
    console.log('Nasłuchiwanie na http://192.168.1.197:3001');
});
