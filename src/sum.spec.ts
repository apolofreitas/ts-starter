import { assert, test } from 'vitest'
import sum from '~/sum'

test('Sum', async () => {
  assert.equal(sum(1, 3), 4)
})
