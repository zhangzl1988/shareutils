describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`commonutils.getKeyName(13) should return "Enter"`, function () {
            assert(commonutils.getKeyName(13) === 'Enter')
        });
    });

});