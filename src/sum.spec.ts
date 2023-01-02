import test from 'ava'

import sum from '~/sum'

test('adds 1 + 2 to equal 3', async (t) => {
  t.is(sum(1, 2), 3)
})
