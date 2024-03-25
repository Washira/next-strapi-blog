const ArticleCard = () => {
  return (
    <div className='card sm:card-side bg-base-100 shadow-xl'>
      <figure>
        <img
          src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          alt='Movie'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          New movie is released!
          <div className='badge badge-secondary'>NEW</div>
        </h2>
        <p>Click the button to watch on Jetflix app.</p>

        <div className='card-actions justify-between'>
          <div className='card-actions'>
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
          <button className='btn btn-primary'>Watch</button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
