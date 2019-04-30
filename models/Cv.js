const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CvSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  personal: {
    type: Object,
    required: true
  },
  skills: {
    type: Array,
    required: true
  },
  jobs: {
    type: Array,
    required: true
  },
  education: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cv = mongoose.model("Cv", CvSchema);
