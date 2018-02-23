describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`shareutils.getKeyName(13) should return "Enter"`, function () {
            assert(shareutils.getKeyName(13) === 'Enter')
        });
    });

});