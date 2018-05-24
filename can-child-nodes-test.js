var QUnit = require('steal-qunit');
var childNodes = require('./can-child-nodes');

QUnit.module('can-child-nodes');

QUnit.test('Initialized the plugin', function(){
    var div = document.createElement("div");
    div.innerHTML = "<span></span>";
    QUnit.equal(childNodes(div).length, 1);
});
