"use strict";

var bs = require('browser-sync').create();
bs.init({

	files: ["formwork.css"],
	plugins: [
		{
			module: "bs-html-injector",
			options: {
				files: ["index.html"]
			}
		}
	],
	watchTask: true,
	ghostMode: false,
	notify: false,
	logLevel: "silent",
	server: {
		baseDir: "demo",
		index: 'index.html'
	},
	serveStatic: ['.'],
	open: "external"
});

