// GET /part-of-speech/:part - for example, /part-of-speech/adjective, will return a random word + definition + part of speech (part is enum)
// GET /part-of-speech/:part?letter=X - for example, /part-of-speech/noun?letter=m, will return a random word with the same letter + definition + part of speech
const getRandomWordBySpeechPart = (req, res, next) => {};

module.exports = { getRandomWordBySpeechPart };
