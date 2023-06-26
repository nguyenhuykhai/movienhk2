import React from 'react'

export default function Newsletter() {
  return (
    <section className='newsletter' id='newsletter'>
        <h2>Subscribe To Get <br></br> Newsletter</h2>
        <form action=''>
            <input type='email' className='email' placeholder='Enter Email' required />
            <input type='submit' value='Subscribe' className='btn' required />
        </form>
    </section>
  )
}
