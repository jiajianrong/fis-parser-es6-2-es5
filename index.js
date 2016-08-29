/*
 * jr8
 * https://github.com/jiajianrong/jr8/
 */

'use strict';

var babel = require('babel-core');

module.exports = function (content, file, opts) {
  //file.isES6 = (file.isES6 == undefined) ? true : file.isES6;
  //if (!file.isES6) return content;
  opts.moduleId = file.getId();
  var result = babel.transform(content, opts);
  
  
  var newcontent = result.code;
  var fileid = file.getId();
  fileid = fileid.replace( /\.es6$/, '' );
  
  if (!/^\s*define\s*\(/.test(newcontent)) {
    newcontent = 'define(\'' + fileid + '\', function(require, exports, module){ ' + newcontent +' \r\n});';
  }
  
  return newcontent;
};