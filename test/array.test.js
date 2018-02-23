describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`commonutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(commonutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('commonutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(commonutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`commonutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(commonutils.arrayEqual(arr, arr))
        });
    });
});