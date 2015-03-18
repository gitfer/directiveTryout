'use strict';

describe('Controller: CustomCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesTryoutApp'));

  var CustomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomCtrl = $controller('CustomCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
