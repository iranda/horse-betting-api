const db = require('../../db');
const utils = require('../../utils');

function getAllHorses(req, res) {
  if (utils.isObjectEmpty(req.query)) {
    res.json(db);
  }

  const { sort } = req.query;

  if (sort !== undefined)  {
    ///api/v1/horses?sort=votes
    if (sort === 'votes') {
      let sortedByVotes = Object.assign(db)
        .sort((a, b) => b.votes.length - a.votes.length);

      res.json(sortedByVotes);
    }
  }
}

function getHorseById(req, res) {
  const horse = utils.getElementInArrayByKey(db, 'id', req.params.horseId);
  if (horse !== undefined) {
    res.json(horse);
  } else {
    res.status(404).send('Not found');
  }
}

function getVotedByUserId(req, res) {
  try {
    console.log(12313);
    const votedHorseList = db.reduce((accumulator, currentVal) => {
      if (utils.isObjectWithKeyInArray(currentVal.votes, 'id', req.params.userId)) {
        return accumulator.concat(currentVal.name);
      } else return accumulator;
    }, []);

    if (!votedHorseList.length) throw new Error();

    res.json(votedHorseList);
  } catch (err) {
    res.status(400).send('Request can not be processed');
  }
}

function voteForHorse(req, res) {
  try {
    const horse = utils.getElementInArrayByKey(db, 'id', req.params.horseId);
    const isUserVoted = utils.isObjectWithKeyInArray(horse.votes, 'id', req.params.userId);
    if (!isUserVoted) {
      horse.votes.push({ id: req.params.userId, name: req.params.userName });
      res.status(400).send('ok');
    } else throw new Error();
  } catch (err) {
    res.status(400).send('Request can not be processed');
  }
}

function unvoteForHorse(req, res) {
  try {
    const horse = utils.getElementInArrayByKey(db, 'id', req.params.horseId);
    const isUserVoted = utils.isObjectWithKeyInArray(horse.votes, 'id', req.params.userId);
    if (isUserVoted) {
      const votes = horse.votes.filter(vote => vote.userId !== req.params.userId);
      Object.assign({ votes }, horse);
      res.status(400).send('ok');
    } else throw new Error();
  } catch (err) {
    res.status(400).send('Request can not be processed');
  }
}

module.exports = {
  getAllHorses,
  getHorseById,
  getVotedByUserId,
  voteForHorse,
  unvoteForHorse,
};
