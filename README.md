# Waveorb error

Waveorb error writes errors to the database. 

Based on MongoDB. Saves errors in the 'error' collection in the database.

### Install

```
npm install waveorb-cache
```

### Usage

```js
// Requires mongowave
var mongodb = require('mongowave')                  
var db = await mongodb('firmalisten')

var errors = require('waveorb-error')({ db })

// The name of the error
var name = 'error-name'

// The message
var message = 'This failed'

// Data
var data = { some: 'data' }

// Register error
await errors.register({ name, message, data })

// Remove all errors
var result = await errors.clear()
```

Created by [Eldøy Projects](https://eldoy.com)

Enjoy!
