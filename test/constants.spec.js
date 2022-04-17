const test = require('ava')
const secp256k1 = require('../src/index.js')
const secp256k1Native = require('noise-curve-secp')

test('constants exports', (t) => {
  delete secp256k1.generateKeyPair
  delete secp256k1.generateSeedKeyPair
  delete secp256k1.dh

  t.deepEqual(
    { ...secp256k1 },
    {
      DHLEN: 32,
      PKLEN: 33,
      SKLEN: 32,
      ALG: 'secp256k1',
      name: 'secp256k1'
    }
  )

  delete secp256k1Native.generateKeyPair
  delete secp256k1Native.dh

  t.deepEqual({ ...secp256k1 }, { ...secp256k1Native })
})
