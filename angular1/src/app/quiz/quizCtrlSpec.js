describe('Controller: ListCtrl', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('quiz-app'));
    var ctrl;
    // Before each unit test, instantiate a new instance of the controller
    beforeEach(inject(function($controller) {
        ctrl = $controller('gameCtrl');
    }));
    it('should have items available on load', function() {
        expect(ctrl.type).toEqual("ALL");
    });

});
