import React from 'react'
import Scan from './scan'

const QrScanner = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>Pay using QR Code</h1>

        <Scan />
    </div>
  )
}

export default QrScanner