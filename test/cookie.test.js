describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            shareutils.setCookie('test', 'getTestValue')
        })
        it(`shareutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(shareutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            shareutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            shareutils.setCookie('test', 'removeTestValue')
        })
        it(`shareutils.removeCookie('test') should return false`, function () {
            shareutils.removeCookie('test')
            assert.notEqual(shareutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`shareutils.getCookie('test', 'setCookie') should return true`, function () {
            shareutils.setCookie('test', 'setCookie')
            assert(shareutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            shareutils.removeCookie('test')
        })
    })
})