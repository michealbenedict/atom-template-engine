'use strict';
var jade = require('jade');

function toHTML(string) {
  return jade.render(string, {
    pretty: true
  });
}

function fromHTML(string) {
  
}

module.exports = {
  toHTML: toHTML,
  fromHTML: fromHTML
}