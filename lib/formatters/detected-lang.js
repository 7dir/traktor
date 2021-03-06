/**
 * Message formatter for detect lang command results.
 *
 * @param {String} lang
 * @param {Object} opts
 * @param {Object} imports
 *
 * @returns {undefined}
 */
"use strict";

exports.__esModule = true;
exports["default"] = detectedLangFormatter;

function detectedLangFormatter(lang, opts, imports) {
  var chalk = imports.chalk;
  var messages = imports.messages;

  return messages.log(chalk.grey("source:  ") + lang);
}

module.exports = exports["default"];