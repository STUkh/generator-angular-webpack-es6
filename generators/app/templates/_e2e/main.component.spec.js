
describe('Main Page', function() {


    beforeEach(function() {
        browser.get('/#/');
    });

    it('should go to the correct url', function() {
        browser.get('/#/');


        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/').pop()).toBe('');
        });

    });

});