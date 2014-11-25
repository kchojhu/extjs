module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
	grunt.loadNpmTasks('grunt-connect-proxy');
	grunt.initConfig({
		connect : {
			devserver : {
				options : {
					port : '5000',
					base : './',
					livereload : true,
					middleware : function(connect, options) {
						return [
						// serve static files from sources
						connect.static('src/main/webapp'),
						// then from grunt-built files
						connect.static('build/grunt/dist'),
						// then from rest services in tomcat
						proxySnippet ];
					}
				},
				proxies : [ {
					context : '/api',
					host : 'localhost',
					port : 8080,
					https : false,
					rewrite : {
						// the key '^/api' is a regex for the path to be
						// rewritten
						// the value is the context of the data service
						'^/api' : '/slickdeals/api'
					}
				} ]
			}
		},
		open : {
			devserver : {
				path : "http://localhost:5000/app"
			},
            siesta: {
                path: 'http://localhost:5000/app/siesta'
            }
		},
		watch : {
			options : {
				livereload : true
			},
			scripts : {
				files : [ 'src/main/webapp/app/app/**/*.js', 'src/main/webapp/app/siesta/**/*.js' ]
			}
		},
		
	});

	grunt.registerTask('server', [ 'configureProxies:devserver',
			'connect:devserver', 'open:siesta', 'open:devserver', 'watch' ]);
};