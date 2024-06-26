setup(async function ({ $ }) {
  await $.db('error').delete()

  await $.db('error').create([
    { name: 'error1', message: 'test1', data: { test: '1' } },
    { name: 'error2', message: 'test2', data: { test: '2' } }
  ])
})

it('should clear', async ({ $, t }) => {
  var errors = await $.db('error').find()
  t.equal(errors.length, 2)

  var result = await $.error.clear()
  t.deepStrictEqual(result, { n: 2 })

  errors = await $.db('error').find()
  t.equal(errors.length, 0)
})
