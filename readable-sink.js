'use strict'

const { Buffer } = require('buffer')
const { Readable } = require('stream')

const status_type = require('./status-enum')

class Sink extends Readable {
  constructor (opts = {}) {
    this.source = null
    this.bindCb = null

    super(opts)
  }

  bindSource (source /*, bindCb*/) {
    this.source = source

    // Critically important
    this.source.bindSink(this)
  }

  next (status, error, buffer, bytes) {d
    if (error) {
      // emit error down stream
    }

    // write or process buffer here

    // pull again
    this.source.pull(null, buffer)
  }

  _read() {
    // ...
  }
}

module.exports = ReadableSink
