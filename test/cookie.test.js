describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            commonutils.setCookie('test', 'getTestValue')
        })
        it(`commonutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(commonutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            commonutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            commonutils.setCookie('test', 'removeTestValue')
        })
        it(`commonutils.removeCookie('test') should return false`, function () {
            commonutils.removeCookie('test')
            assert.notEqual(commonutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`commonutils.getCookie('test', 'setCookie') should return true`, function () {
            commonutils.setCookie('test', 'setCookie')
            assert(commonutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            commonutils.removeCookie('test')
        })
    })
})