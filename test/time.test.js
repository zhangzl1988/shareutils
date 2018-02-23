describe('Time API:', function () {
    describe('#formatPassTime()', function () {
        it(`shareutils.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function () {
            let time = new Date().getTime() - 30000
            assert(shareutils.formatPassTime(time) === "刚刚")
        });

        it(`shareutils.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
            let time = new Date().getTime() - 70000
            assert(shareutils.formatPassTime(time) === "1分钟前")
        });

        it(`shareutils.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60
            assert(shareutils.formatPassTime(time) === "1小时前")
        });

        it(`shareutils.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24
            assert(shareutils.formatPassTime(time) === "1天前")
        });

        it(`shareutils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30
            assert(shareutils.formatPassTime(time) === "1个月前")
        });

        it(`shareutils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
            assert(shareutils.formatPassTime(time) === "1年前")
        });
    });

    describe('#formatRemainTime()', function () {
        it(`shareutils.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function () {
            let time = new Date().getTime(),
                oneSecond = 1000,
                oneMinute = oneSecond * 60,
                oneHour = oneMinute * 60,
                oneDay = oneHour * 24;
            time = time + oneSecond + oneMinute + oneHour + oneDay
            assert(shareutils.formatRemainTime(time) === "1天 1小时 1分钟 1秒")
        });
    });

    describe('#isSameDay()', function () {
        it(`shareutils.isSameDay(new Date()) should return true`, function () {
            assert(shareutils.isSameDay(new Date()) === true)
        });
        it(`shareutils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) should return false`, function () {
            assert(shareutils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) === false)
        });
    });
})