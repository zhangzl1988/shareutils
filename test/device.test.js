describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`shareutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${shareutils.getExplore()}`)
            assert(/^Chrome:/.test(shareutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`shareutils.getOS() should return "windows"`, function () {
            console.log(`OS:${shareutils.getOS()}`)
            assert(shareutils.getOS() === 'windows' || shareutils.getOS() === 'MacOSX' || shareutils.getOS() === 'linux')
        });
    });
});