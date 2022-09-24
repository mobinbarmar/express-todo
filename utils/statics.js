const path = require('path');

const express = require('express');


exports.setStatics = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.use(express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')))
    app.use(express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome')))
}