/**
 * Created by minhhuyle on 04/10/2017.
 */
(function () {
        angular.module("quiz-app", ["ngMockE2E", "ngResource", "ngRoute"])
            .filter('answer', ['filterFilter', function (filterFilter) {
                return function (qcmArray, type) {
                    switch (type) {
                        case "ALL":
                            return qcmArray;
                            break;
                        case "DONE":
                            return filterFilter(qcmArray, {done: true});
                            break;
                        case "UNDONE":
                            return filterFilter(qcmArray, {done: false});
                            break;
                        default:
                            return qcmArray;
                    }
                }
            }])
            .config(['$routeProvider', function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: "app/quiz/game/game.html",
                    })
                    .otherwise({redirectTo: '/'});
            }])
            .factory('qcmResource', ['$resource', function ($resource) {
                return $resource('/qcm/:id', {id: '@id'});
            }])
            .factory('qcmListService', ['$http', 'qcmResource', function ($http, qcmResource) {
                var self = this;
                self.qcm = [];

                self.addNewQcm = function (newQcm) {
                    self.qcm.push(newQcm);
                };

                self.getAllQcms = function () {
                    return self.qcm;
                };

                self.qcm.push(qcmResource.get({id: 1}));

                return this;
            }])
            .run(function ($httpBackend) {
                    var l = [{
                        title: "1er",
                        done: false,
                        replay: false,
                        answersUser: [],
                        indexQuestion: 0,
                        score: 0,
                        questions: [{
                            enonce: "ABHHBHBB",
                            responses: ["A", "B", "C", "D"],
                            good: 1
                        },
                            {
                                enonce: "ABHklkHBHBB",
                                responses: ["A", "B", "C", "D"],
                                good: 0
                            }, {
                                enonce: "Ckdoskdlskdd",
                                responses: ["A", "B", "C", "D"],
                                good: 2
                            },
                            {
                                enonce: "iijijijij",
                                responses: ["A", "B", "C", "D"],
                                good: 3
                            }]
                    }, {
                        title: "2ème",
                        done: false,
                        replay: false,
                        answersUser: [],
                        indexQuestion: 0,
                        score: 0,
                        questions: [{
                            enonce: "ABHHBHBB",
                            responses: ["A", "B", "C", "D"],
                            good: 1
                        },
                            {
                                enonce: "ABHklkHBHBB",
                                responses: ["A", "B", "C", "D"],
                                good: 0
                            }, {
                                enonce: "Ckdoskdlskdd",
                                responses: ["A", "B", "C", "D"],
                                good: 2
                            },
                            {
                                enonce: "iijijijij",
                                responses: ["A", "B", "C", "D"],
                                good: 3
                            }]
                    }];
                    $httpBackend.whenGET('/qcm').respond(l);
                    $httpBackend.whenGET(new RegExp('\\/qcm\\/[0-9]+')).respond(l[0]);
                    $httpBackend.whenGET(new RegExp('[A-z]+')).passThrough();
                }
            )
        ;
    }
    ()
);