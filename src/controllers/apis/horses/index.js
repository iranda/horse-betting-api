const express = require('express');
const horseService = require('../../../services/horses');

const router = express.Router();

router.get('/', horseService.getAllHorses);
router.get('/:horseId', horseService.getHorseById);
router.get('/:userId/voted', horseService.getVotedByUserId);

router.post('/:horseId/vote/:horse', horseService.voteForHorse);
router.post('/:horseId/unvote/:horse', horseService.unvoteForHorse);

module.exports = router;
