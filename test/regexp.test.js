describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('commonutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(commonutils.isEmail("leiquanlive.com"))
        });
        it('commonutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(commonutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('commonutils.isIdCard("622224188203234033") should return true ', function () {
            assert(commonutils.isIdCard("622224188203234033"))
        });
        it('commonutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!commonutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('commonutils.isPhoneNum("18882324234") should return true ', function () {
            assert(commonutils.isPhoneNum("18882324234"))
        });
        it('commonutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(commonutils.isPhoneNum("8618882324234"))
        });
        it('commonutils.isPhoneNum("5534553") should return false', function () {
            assert(!commonutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('commonutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(commonutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('commonutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(commonutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('commonutils.isUrl("www.baidu.com") should return true', function () {
            assert(commonutils.isUrl("www.baidu.com"))
        });
        it('commonutils.isUrl("baidu.com") should return true', function () {
            assert(commonutils.isUrl("baidu.com"))
        });
        it('commonutils.isUrl("http://baiducom") should return false', function () {
            assert(!commonutils.isUrl("http://baiducom"))
        });
    });

});