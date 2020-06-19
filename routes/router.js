const express = require(`express`);
const router = express.Router();
const {
	getObjects,
	getObject,
	createObject,
	updateObject,
	deleteObject,
} = require('../controllers/crud.controller');

router.route('/').get(getObjects).post(createObject);
router.route('/:id').get(getObject).put(updateObject).delete(deleteObject);

module.exports = router;
