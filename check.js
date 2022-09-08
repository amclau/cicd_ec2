let AWS = require('aws-sdk');
var mysql2 = require('mysql2/promise');



	const connectionConfig = {
		host: 'rdsproxy.proxy-chazbcmaaqoz.us-east-1.rds.amazonaws.com',
		user: 'admin',
		database: 'admin',
		ssl: { rejectUnauthorized: false },
		password: 'admindeep',
		authSwitchHandler: function({ pluginName, pluginData }, cb) {
			console.log("Setting new auth handler.");
		}
	};



	let connection;

	try {
		connection = await mysql2.createConnection(connectionConfig);
	} catch(err) {
		console.error('error connecting to the database');
		console.error(err);
		response = {	
			statusCode: 500,
			"headers": {
				"Content-Type": "application/json"
			},
			body: 'error connecting to the database'
		};
		return response;
	}		

	console.log(`connected as id ${connection.threadId}`);

	
