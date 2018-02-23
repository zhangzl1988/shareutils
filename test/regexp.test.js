describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('shareutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(shareutils.isEmail("leiquanlive.com"))
        });
        it('shareutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(shareutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('shareutils.isIdCard("622224188203234033") should return true ', function () {
            assert(shareutils.isIdCard("622224188203234033"))
        });
        it('shareutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!shareutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('shareutils.isPhoneNum("18882324234") should return true ', function () {
            assert(shareutils.isPhoneNum("18882324234"))
        });
        it('shareutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(shareutils.isPhoneNum("8618882324234"))
        });
        it('shareutils.isPhoneNum("5534553") should return false', function () {
            assert(!shareutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('shareutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(shareutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('shareutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(shareutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('shareutils.isUrl("www.baidu.com") should return true', function () {
            assert(shareutils.isUrl("www.baidu.com"))
        });
        it('shareutils.isUrl("baidu.com") should return true', function () {
            assert(shareutils.isUrl("baidu.com"))
        });
        it('shareutils.isUrl("http://baiducom") should return false', function () {
            assert(!shareutils.isUrl("http://baiducom"))
        });
    });

});