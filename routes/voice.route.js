const { Router } = require("express");
const { voiceController } = require("../controllers/voice.controller");
const Voice = require("../models/Voice.model");

const router = Router();

router.get("/voice/save", voiceController.addVoice);
router.get('/', voiceController.getVoice)
router.get('/:language', voiceController.languageVoiceId)

module.exports = router;
