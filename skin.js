const mongoose = require('./database')

const SkinSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  accessesAmount: {
    type: String,
  },
})

const Skin = mongoose.model('skins', SkinSchema)
module.exports = Skin
