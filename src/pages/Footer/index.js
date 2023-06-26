import React from 'react'

//Import CSS
import classNames from 'classnames/bind';

export default function Footer() {
  return (
    <>
    <section className='footer'>
        <a href='#' className='logo'>
            <i className='bx bxs-movie' ></i>
            <p>MOVIES-NHK</p>
        </a>
        <div className='social'>
        <a href='#'><i className='bx bxl-facebook' ></i></a>
        <a href='#'><i className='bx bxl-twitter' ></i></a>
        <a href='#'><i className='bx bxl-instagram' ></i></a>
        </div>
    </section>

    {/* Copy right */}
    <div className='copyright'>
        <p>&#169; Nguyễn Huy Khải All Right Reserved</p>
    </div>  
    </>
  )
}
