module.exports = {

	map: false,
	plugins: {
		'autoprefixer': { grid: true },
		'postcss-clean': {
			level: {
				2: {
					mergeAdjacentRules: false
				}
			},
			//format: 'beautify'
		}
	}
}
