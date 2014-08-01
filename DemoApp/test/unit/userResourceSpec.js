'use strict';

describe('userResource', function () {

    beforeEach(module('eventsApp'));

    describe('get', function () {

        it('should issue a GET request to /data/user/bob when the username is bob', inject(function (userResource, $httpBackend) {

            $httpBackend.when('GET', '/data/user/bob').respond({name: 'Robert'});
            var user = userResource.get({userName: 'bob'});
            $httpBackend.flush();

            expect(user.name).toBe('Robert');

        }));
    });
});
