import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// import redis from 'connect-redis';
import bodyParser from 'body-parser';
import route from './route';

function handleApp(app) {
	let isServer = false;
	if (!app) {
		isServer = true;
		app = express();
		app.use(express.static('dist/static'));
	}
	app.set('x-powered-by', false);
	// const RedisStore = redis(session);
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(session({
		name: "SSID",
		secret: "mfm",
		resave: false,
		saveUninitialized: true,
		// store: new RedisStore(config.redisConfig)
	}));

	app.use('/data', route);

	if (isServer) {
		let port = process.env.PORT || 8080
		app.listen(port, function (err) {
			if (err) {
				console.log(err)
				return
			}
			console.log("Running ...")
		});
	}
}

if (process.argv.includes('--production')) {
	handleApp();
}

module.exports = handleApp;