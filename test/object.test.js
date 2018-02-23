describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual commonutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, commonutils.deepClone(person))
        });

        it(`person === commonutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, commonutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`commonutils.isEmptyObject({}) should return true`, function () {
            assert(commonutils.deepClone({}))
        });

        it(`commonutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(commonutils.isEmptyObject({
                one: 1
            }))
        });

        it(`commonutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(commonutils.isEmptyObject([]))
        });
    });
})