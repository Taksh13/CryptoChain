const cryptoHash = require('./crypto-hash');

describe('cryptoHash', () => {

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('test'))
            .toEqual('4d967a30111bf29f0eba01c448b375c1629b2fed01cdfcc3aed91f1b57d5dd5e')
    });

    it('produces the same hash with the same input arg in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
            .toEqual(cryptoHash('three', 'one', 'two'));
    });

    it('produces a unique hash when the properties have changed on an input', () => {
        const test = {};
        const originalHash = cryptoHash(test)
        test['a'] = 'a';

        expect(cryptoHash(test)).not.toEqual(originalHash);
    });
});