const mongoose = require("mongoose");

const voiceSchema = mongoose.Schema({
  language: String,
  providerLanguage: String,
  name: String,
  id: String,
  sex: String,
  flags: Object,
});

const Voice = mongoose.model("Voice", voiceSchema);

module.exports = Voice;
