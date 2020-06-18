const express = require(`express`);
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({ success: true, msg: `Show all api` });
});

router.post('/', (req, res) => {
	res.status(200).json({ success: true, msg: `Create new` });
});

router.put('/:id', (req, res) => {
	res.status(200).json({ success: true, msg: `Update ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
	res.status(200).json({ success: true, msg: `Delete ${req.params.id}` });
});

module.exports = router;
