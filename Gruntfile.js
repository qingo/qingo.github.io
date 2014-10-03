/**
 * Created by Qingo(site: http://www.qingo.me, email: all@qingo.me) on 2014/10/3.
 */
module.exports = function (grunt) {
	grunt.initConfig({
		jade: {
			compile: {
				options: {
					debug: false
				},
				files: {
					'issue.html': ['issue.jade']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.registerTask('default', ['jade'])
};