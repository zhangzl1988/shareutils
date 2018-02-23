describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`commonutils.addClass($ele, 'test') should return true`, function () {
            commonutils.addClass($ele, 'test')
            assert(commonutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            commonutils.addClass($ele, 'test')
        })
        it(`commonutils.hasClass($ele, 'test') should return true`, function () {
            assert(commonutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            commonutils.addClass($ele, 'test')
        })
        it(`commonutils.removeClass($ele, 'test') should return false`, function () {
            commonutils.removeClass($ele, 'test')
            assert.notEqual(commonutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});