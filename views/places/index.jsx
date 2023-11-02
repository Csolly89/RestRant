const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place,i) => { 
      return (
        <div className="text-center col-sm-6" key={i} >
          <h2>
            <a href={`/places/${place.id}`} >
            {place.name}
            </a>
          </h2>
          <p> 
            {place.cuisines}
          </p>
          <div><img className="placesImg" src={place.pic} alt={place.name}/></div>
          <p>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  

module.exports = index