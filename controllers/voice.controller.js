const axios = require("axios").default;
const Voice = require("../models/Voice.model");

module.exports.voiceController = {
  addVoice: async (req, res) => {
    const { data } = await axios.get(
      "https://api.voxqube.com:7000/v2/voices/list"
    );
    let voices;
    for (const key of data) {
      voices = await Voice.create({
        name: key.name,
        providerLanguage: key.providerLanguage,
        sex: key.sex,
        id: key.id,
        flag: key.flag,
        language: key.language,
      });
    }
    res.json(voices);
  },

  getVoice: async (req, res) => {
    const voices = await Voice.find();
    res.json(voices);
  },

  languageVoiceId: async (req, res) => {
    try {
      const language = await Voice.find({ language: req.params.language });
      res.json(language);
    } catch (e) {
      res.json("ошибка при выводе" + e);
    }
  },
};
