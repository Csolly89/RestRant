const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h4 className="inactive">
          No comments yet!
        </h4>
      )
      if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
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
                    <h1>{ data.place.name }</h1>
                    <img className="placesImg" src={data.place.pic} alt={data.place.name} />
                        <h3>
                        Located in {data.place.city}, {data.place.state}
                        </h3>
                </div>        
                <div className="col-sm-6">
                    <h3>
                    {data.place.showEstablished()}
                    </h3>
                    <h4>
                    Serving {data.place.cuisines}
                    </h4>

                    <div>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>N/a</p>
                    </div>
                    <div>
                        <h2>Comments</h2>
                        {comments}
                    </div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    </form>
                </div>    
            </div>        
            </main>
          
            <h1>Leave a Review</h1>
            <form method="POST" action="/places/:id/comment ">
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" type="text" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Rant</label>
                    <input className="form-control" type="checkbox" id="rant"/>
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input className="form-control" type="number" id="stars"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Content</label>
                    <input className="form-control" type="textarea" id="Content"/>
                </div>
    
                <input className="btn btn-primary" type="submit" value="Add Review" />
            </form>
        </Def>
    )
}

module.exports = show
