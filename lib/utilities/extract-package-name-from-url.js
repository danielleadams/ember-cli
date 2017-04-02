'use strict';

module.exports = function extractPackageNameFromUrl(url) {
  let urlMatch = new RegExp(/([a-z]+\:\/+)([^\/\s]*)([a-z0-9^=%&;\/~\+]*\.git)?/);
  let urlPath = url.match(urlMatch)[4];

  if (!urlPath) {
    return null;
  }

  return urlPath.split('/')[1].replace(/\.git/, '');
};
