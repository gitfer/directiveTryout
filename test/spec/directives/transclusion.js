'use strict';

describe('Directive: transclusion', function () {

  // load the directive's module
  beforeEach(module('directivesTryoutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<transclusion></transclusion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the transclusion directive');
  }));
});
