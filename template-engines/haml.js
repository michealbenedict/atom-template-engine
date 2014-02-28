'use strict';
var haml = require('hamljs');

function toHTML(string) {
  return haml.render(string, {
    pretty: true
  });
}

function fromHTML(string) {
  
}

module.exports = {
  toHTML: toHTML,
  fromHTML: fromHTML
}