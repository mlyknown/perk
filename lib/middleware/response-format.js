module.exports = function(req, res, next) {
	const validFormats = ['html', 'json'];
	req.responseFormat = function() {
		let format = null;
		if(req.query && req.query.responseFormat) {
			format = req.query.responseFormat.toString().toLowerCase();
		}
		if(!validFormats.includes(format)) {
			format = config.webserver.response.defaultFormat;
		}
		return format;
	};
	next();
};