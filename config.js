var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "srv1086.hstgr.io",
	    user: "u303845834_thinkplussapi",
	    password: "VAKILr@6762",
	    database: "u303845834_thinkplussapi",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 