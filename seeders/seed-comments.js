const db = require ('../models')

async function seed() {
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    let comment = await db.Comment.create({
        author:'Famished Fran',
        rant: false,
        starts: 5.0,
        content: 'Wow, Simply amazing! Highly recommended!!'
    })

    // pushing comments to the places comment array
    place.comments.push(comment.id)

    // save the place now that it has a comment
    await place.save()

    // exit the program
    process.exit()
}

seed()

