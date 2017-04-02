'use strict';

const expect = require('chai').expect;
const extractPackageNameFromUrl = require('../../../lib/utilities/extract-package-name-from-url');

describe('extractPackageNameFromUrl', function() {
  it('should return a package name based on url', function() {
    let url = 'http://github.com/ember-cli/ember-cli.git';
    let addonName = extractPackageNameFromUrl(url);

    expect(addonName).to.equal('ember-cli', 'should parse url for addon name.');
  });

  it('should not return a package name from a url without ".git" pattern', function() {
    let url = 'http://github.com/ember-cli/ember-cli';
    let addonName = extractPackageNameFromUrl(url);

    expect(addonName).to.equal(null, 'should return "null" for regular urls');
  });
});
