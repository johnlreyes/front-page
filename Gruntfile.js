module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
		htmlmin: {
			"public": {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'public/index.html': 'public/index.html',
					'public/404.html': 'public/404.html'
				}
			}
		}
    });
};
