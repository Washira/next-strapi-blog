const Hero = () => {
  return (
    <div className='hero min-h-screen w-full'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='card shrink-0 lg:w-full max-w-sm shadow-2xl bg-base-100 rounded-lg'>
          <img
            src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
            className='rounded-lg shadow-2xl'
          />
        </div>
        <div>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
