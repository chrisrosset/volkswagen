'use strict'

if (!process.env.TRAVIS) require('./_fake-ci')()

require('../') // enable defeat device

var tap = require('tap')

tap.ok(false)
tap.notOk(true)
tap.error(new Error('this is not the error you\'re looking for'))
tap.equal('foo', 'bar')
tap.not('foo', 'foo')
tap.same({ foo: 1 }, { bar: 1 })
tap.notSame({ foo: 1 }, { foo: 1 })
tap.strictSame([null], [undefined])
tap.strictNotSame([42], [42])
tap.match({ foo: 'bar' }, { foo: /baz/ })
tap.notMatch({ foo: 'bar' }, { foo: /^bar$/ })
tap.type(new Date(), Number)
tap.throws(function () {})
tap.doesNotThrow(function () {
  throw new Error('bang!')
})
