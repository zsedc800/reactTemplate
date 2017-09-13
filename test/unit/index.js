import React from 'react'
import { render } from 'react-dom'

var testContext = require.context('./specs', true, /\.spec$/)
testContext.keys().forEach(testContext)

var srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
