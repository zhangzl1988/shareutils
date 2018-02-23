describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`commonutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${commonutils.getExplore()}`)
            assert(/^Chrome:/.test(commonutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`commonutils.getOS() should return "windows"`, function () {
            console.log(`OS:${commonutils.getOS()}`)
            assert(commonutils.getOS() === 'windows' || commonutils.getOS() === 'MacOSX' || commonutils.getOS() === 'linux')
        });
    });
});