module.exports = {

	map: false,
	plugins: {
		'autoprefixer': { grid: true },
		//'cssnano': { }
		'postcss-clean': {
			level: 2,
			//format: 'beautify'
		}
	}
}
