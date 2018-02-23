describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(shareutils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(shareutils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= shareutils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = shareutils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})