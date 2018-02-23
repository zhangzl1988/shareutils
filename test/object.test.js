describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual shareutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, shareutils.deepClone(person))
        });

        it(`person === shareutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, shareutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`shareutils.isEmptyObject({}) should return true`, function () {
            assert(shareutils.deepClone({}))
        });

        it(`shareutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(shareutils.isEmptyObject({
                one: 1
            }))
        });

        it(`shareutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(shareutils.isEmptyObject([]))
        });
    });
})