import React from 'react'

export default function Alerts () {
  return (
    <div>
      <h2>Alerts</h2>
      <div className='alert alert-default' role='alert'>
        <div className='alert-body'>
          Default. This is sample text.
          {' '}
        </div>
        <button type='button' className='btn btn-default'>
          Button
        </button>
      </div>
      <div className='alert alert-info' role='alert'>
        <div className='alert-body'>
          Info. Heads up!
          {' '}
          <a href='javascript:;' className='alert-link'>Link</a>
        </div>
        <button type='button' className='btn btn-default'>
          Button
        </button>
      </div>
      <div className='alert alert-success' role='alert'>
        <div className='alert-body'>
          Success. Well done!
          {' '}
          <a href='javascript:;' className='alert-link'>Link</a>
        </div>
        <button type='button' className='btn btn-default'>
          Button
        </button>
        <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>

      <div className='alert alert-warning' role='alert'>
        <div className='alert-body'>
          Warning. Be careful!
          {' '}
          <a href='javascript:;' className='alert-link'>Link</a>
        </div>
      </div>
      <div className='alert alert-danger' role='alert'>
        <div className='alert-body'>
          Danger. Oh snap!
          {' '}
          <a href='javascript:;' className='alert-link'>Link</a>
        </div>
        <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>

      <h3>With heading</h3>
      <div className='alert alert-default' role='alert'>
        <div className='alert-body'>
          <h3><strong>Heading title</strong></h3>
          Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating.
        </div>
      </div>

      <h3>For small display</h3>
      <div className='alert alert-default alert-vertical' role='alert'>
        <div className='alert-body'>
          Default. This is sample text.
          {' '}
        </div>
        <button type='button' className='btn btn-default btn-lg btn-block'>
          Action
        </button>
        <button type='button' className='btn btn-default btn-lg btn-block'>
          Dismiss
        </button>
      </div>

    </div>
  )
}
