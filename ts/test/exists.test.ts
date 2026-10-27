
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HqLiveSportsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HqLiveSportsSDK.test()
    equal(testsdk instanceof HqLiveSportsSDK, true,
      'HqLiveSportsSDK.test() must return a client synchronously')
  })

})
