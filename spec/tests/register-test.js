setup(async function ({ $ }) {
  await $.db('error').delete()
})

it('should register', async ({ $, t }) => {
  var result = await $.error.register()
  t.equal(result, undefined)

  var errors = await $.db('error').find()
  t.equal(errors.length, 0)

  var name = 'error1'
  var message = 'test1'
  var data = { test: '1' }
  result = await $.error.register({ name, message, data })
  t.equal(Object.keys(result).length, 6)
  t.equal(typeof result.id, 'string')
  t.equal(result.name, name)
  t.equal(result.message, message)
  t.deepStrictEqual(result.data, data)
  t.equal(typeof result.created_at.getTime, 'function')
  t.equal(typeof result.updated_at.getTime, 'function')

  errors = await $.db('error').find()
  t.equal(errors.length, 1)
  t.deepStrictEqual(result, errors[0])
})
