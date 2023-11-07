const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai_rest.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cat_rest.avif'
}])
.then(() => {
    console.log('Success')
    process.exit()})
.catch(error => {
    console.log('Failure', err)
    process.exit()
})