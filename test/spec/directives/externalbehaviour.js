'use strict';

describe('Directive: externalBehaviour', function () {

  // load the directive's module
  beforeEach(module('directivesTryoutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<external-behaviour></external-behaviour>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the externalBehaviour directive');
  }));
});
