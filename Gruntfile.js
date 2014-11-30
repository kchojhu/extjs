module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-connect-proxy');
	grunt.loadNpmTasks("grunt-shell");
	grunt.loadNpmTasks("grunt-path-check");
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-html-build');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
	grunt.initConfig({
		htmlbuild : {
			dist : {
				src : 'src/main/webapp/app/index.html',
				dest : 'src/main/webapp/app/index.html'
			}
		},
		shell : {
			buildDevelopment : {
				command : [ 'cd src/main/webapp/app', 'sencha app build development' ].join('&&')
			},
			buildProduction : {
				command : [ 'cd src/main/webapp/app', 'sencha app build production' ].join('&&')
			}
		},
		connect : {
			devserver : {
				options : {
					port : '5000',
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
				}/*,
				proxies : [ {
					context: '/',
					host : 'localhost',
					port : 8080,
					https : false,
					rewrite : {
						'^/' : '/slickdeals/'
					}
				}]*/
			}
		},
		open : {
			devserver : {
				path : "http://localhost:5000/app"
			},
			prodserver : {
				path : "http://localhost:8080/slickdeals/build/production/SlickDeals/index.html"
			},
			siesta : {
				path : 'http://localhost:5000/app/siesta'
			}
		},
		concurrent : {
			options : {
				logConcurrentOutput : true
			},
			watch : [ 'watch:css', 'watch:scripts', 'watch:appJson']
		},
		sass : {
			dist : {
				files : {
					'src/main/webapp/app/resources/application.css' : 'src/main/webapp/app/resources/application.scss'
				}
			}
		},
		watch : {
			css : {
				files : 'src/main/webapp/app/resources/application.scss',
				tasks : [ 'sass' ]
			},
			appJson : {
				files : [ 'src/main/webapp/app/app.json', 'src/main/webapp/app/sass/**/*.scss' ],
				tasks : [ 'shell:buildDevelopment', 'htmlbuild:dist' ]
			},
			scripts : {
				options : {
					livereload : true
				},
				files : [ 'src/main/webapp/app/app/**/*.js', 'src/main/webapp/app/siesta/**/*.js', 'src/main/webapp/app/resources/application.css',
						'target/**/*.class', 'src/main/webapp/app/index.html' ]
			}
		},

	});

	grunt.registerTask('dev', [ 'configureProxies:devserver', 'connect:devserver', 'open:siesta', 'open:devserver', 'concurrent:watch' ]);

	grunt.registerTask('prod', [ 'shell:buildProduction', 'open:prodserver' ]);
};