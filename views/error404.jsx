const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <h1>404 Error</h1>
              <p>Sorry, we could not find this page!</p>
              <div>
                <img src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Game over screen"
                width="600px" height="600px"/>
                <div>
                  Photo by <a href="https://unsplash.com/@sigmund">Sigmund</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404