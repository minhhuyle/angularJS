/**
 * Created by minhhuyle on 05/10/2017.
 */
describe('quizCtrl test', function () {
    beforeEach(module('qcmMinh'));

    var ctrl;
    // Before each unit test, instantiate a new instance of the controller
    beforeEach(inject(function ($controller) {
        ctrl = $controller("quizCtrl");
    }));

    afterEach(function () {
    });

    it('should have types available on load', function () {
        expect(ctrl.types).toEqual([{
            label: "Tous", type: "ALL"
        },
            {
                label: "Répondu", type: "DONE"
            },
            {
                label: "Pas Répondu", type: "UNDONE"
            }])
    })


});
