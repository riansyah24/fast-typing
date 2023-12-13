module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,json,js,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};