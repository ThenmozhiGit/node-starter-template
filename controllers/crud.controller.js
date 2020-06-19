exports.getObjects = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Show all objects` });
};
exports.getObject = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Show all objects ${req.params.id}` });
};
exports.createObject = (req, res, next) => {
	res.status(201).json({ success: true, msg: `Create new` });
};
exports.updateObject = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Update ${req.params.id}` });
};
exports.deleteObject = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Delete  ${req.params.id}` });
};
