module.exports = {
  "extends": "airbnb",
  "rules": {
    "indent": [ "error", 4 ], // Visual Studio 4 Space Indent
    "react/jsx-indent": [ 2, 4 ], // Visual Studio 4 Space Indent
    "linebreak-style": [ 1, "windows" ], // Windows LineBreaks
    "eol-last": "off", // Not on UNIX
    "react/jsx-first-prop-new-line": [ 2, "never" ], // Stop crazy lined components
    "no-underscore-dangle": "off", // Allow underscores for (var|func)s?
    "react/jsx-no-bind": "off", // Ignore binded params for now
    "arrow-body-style": "off" // Arrow body functions differ
  },
  "settings": {
    "import/resolver": "webpack"
  },
  "globals": {
  }
};