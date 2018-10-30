'use strict'

const { Writable } = require('stream')

const status_type = require('./status-enum')

class WritableSource extends Writable {
  constructor (opts = {}) {
    this.sink = null

    super(opts)
  }

  bindSink (sink) {
    this.sink = sink
  }

  pull (error, buffer) {
    if (error) {
      // emit error upwards
    }

    // when we get data
    if (more) {
      this.sink.next(status_type.continue, null, buffer, bytesWritten)
    } else {
      this.sink.next(status_type.end, null, buffer, bytesWritten)
    }
  }

  _write (chunk, encoding, callback) {
    // ...
    callback()
  }

  _final (callback) {
    // ...
    callback()
  }
}

module.exports = WritableSource
