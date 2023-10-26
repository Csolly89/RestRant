const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="https://images.unsplash.com/photo-1608877906884-5ffef2ef9612?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0ZWFrfGVufDB8fDB8fHww" alt="sliced med-rare steak"/>
                <div>
                  Photo by <a href="https://unsplash.com/@__menglong"> Bao Menglong</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
          </main>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>

      </Def>
      
    )
  }
  
  module.exports = home