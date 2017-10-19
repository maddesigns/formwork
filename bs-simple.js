"use strict";

var bs = require('browser-sync').create();
bs.init({

	files: ["**/*.css"],
	plugins: [
		{
			module: "bs-html-injector",
			options: {
				files: ["docs/index.html"]
			}
		}
	],
	watchTask: true,
	ghostMode: false,
	notify: false,
	logLevel: "silent",
	server: {
		baseDir: "docs",
		index: 'index.html'
	},
	serveStatic: ['.'],
	open: "external"
});

