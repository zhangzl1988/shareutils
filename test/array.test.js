describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`shareutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(shareutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('shareutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(shareutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`shareutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(shareutils.arrayEqual(arr, arr))
        });
    });
});