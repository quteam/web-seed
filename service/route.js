import express from 'express';
import querystring from 'querystring';
const router = express.Router();

/**
 * 通用接口
 * @type {String}
 */
router.post("*", function (req, res, next) {
	console.log("Post Url:", req.url);
	console.log("Post Data:", req.body);
	
	res.json({code: 100, msg: "Hello"});
});

export default router;
