'use strict';

describe('Directive: isolateScope', function () {

  // load the directive's module
  beforeEach(module('directivesTryoutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<isolate-scope></isolate-scope>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isolateScope directive');
  }));
});
