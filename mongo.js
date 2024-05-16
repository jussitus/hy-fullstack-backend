const mongoose = require('mongoose')
require('dotenv').config()
if (process.argv.length !== 5 && process.argv.length !== 3) {
  console.log('USAGE:\nadd number: node mongo.js [password] [name] [number]\nget numbers: node mongo.js [password]')
  process.exit(1)
}

// i didn't want to include the address so the password is actually from .env and this file is a bit outdated (ex 3.12)
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    const persons = result.map(person => `${person.name} ${person.number}`).join('\n')
    console.log('phonebook:')
    console.log(persons)
    mongoose.connection.close()
  })

}


else {
  const name = process.argv[3]
  const phone_number = process.argv[4]

  const person = new Person({
    name: name,
    number: phone_number,
  })

  person.save().then(() => {
    console.log(`Added ${name} number ${phone_number} to phonebook`)
    mongoose.connection.close()
  })
}