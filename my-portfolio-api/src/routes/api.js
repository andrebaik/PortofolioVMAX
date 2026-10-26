const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// SSE Streaming endpoint for EventSource
router.get('/chat/stream', chatController.streamChat);
router.post('/chat/stream', chatController.streamChat);

// Standard POST streaming endpoint matching portfolv2
router.post('/chat', chatController.postChat);

// Voice session
router.post('/voice/session', chatController.createVoiceSession);

module.exports = router;
