const React = require('react')
const Def = require('../default')


function show ({place}) {
    let comments = (
        <h4 className="inactive">
          No comments yet!
        </h4>
      )
      let rating = (
        <h3 className ='inactive'>
          Not yet rated!
        </h3>
      )
      if (place.comments.length) {
        let sumRatings = place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i= 0; i < averageRating; i++) {
          stars += '⭐'
        }
        rating = (
          <h3>
           {stars} stars
          </h3>
        )
        comments = place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave!😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
            <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{ place.name }</h1>
                    <img className="placesImg" src={place.pic} alt={place.name} />
                        <h3>
                        Located in {place.city}, {place.state}
                        </h3>
                </div>        
                <div className="col-sm-6">
                    <h3>
                    {place.showEstablished()}
                    </h3>
                    <h4>
                    Serving {place.cuisines}
                    </h4>

                    <div>
                        <h2>Rating</h2>
                        {rating}
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>N/a</p>
                    </div>
                    <a href={`/places/${place.id}/edit`} className="btn btn-warning"> 
                    Edit
                    </a>
                    <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    <div className="col-sm-6">
                        <h2>Comments</h2>
                        {comments}
                    </div>
                    </form>
                </div>    
            </div>        
            </main>
          
            <h1>Leave a Review</h1>
            <form method="POST" action={`/places/${place.id}/comment`}>
                <div className="input-group mb-3">
                  <div className="col-6">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" type="text" id="author" name="author"/>
                  </div>  
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input className="form-control" type="number" id="stars" name="stars"/>
                </div>
                <div className="input-group mt-3">
                  <div className="col-6">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" type="textarea" id="content" name="content"/>
                  </div>
                </div>
                <div className="form-group">
                    <label htmlFor="rant"> Is this a Rant?</label>
                    <input type="checkbox" id="rant" name="rant"/>
                </div>
    
                <input className="btn btn-primary" type="submit" value="Add Review" />
            </form>
        </Def>
    )
}

module.exports = show


 
