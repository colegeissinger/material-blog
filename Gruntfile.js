module.exports = function( grunt ) {
	'use strict';

	// Force Unix newlines
	grunt.util.linefeed = '\n';

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		// Concatenate scripts
		concat: {
			options: {
				stripBanners: true,
				separator: ';'
			},
			dist: {
				src: ['js/**/*'],
				dest: 'dist/js/<%= pkg.name %>.js'
			}
		},

		// Uglify scripts
		uglify: {
			dist: {
				files: {
					'dist/js/<%= pkg.name %>.min.js': ['dist/js/<%= pkg.name %>.js']
				},
				options: {
					mangle: {
						except: ['jQuery']
					}
				}
			}
		},

		// Sass
		sass: {
			// Development version
			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'dist/css/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss'
				}
			},

			// Compile the GitHub Page
			github: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'site/styles.min.css': 'sass/github.scss'
				}
			}
		},

		// Minify the CSS
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			minify: {
				files: [{
					expand : true,

					cwd : 'dist/css/',
					src : ['<%= pkg.name %>.css'],

					dest : 'dist/css/',
					ext  : '.min.css'
				}]
			}
		},

		// Watch our files for changes so we can process them
		watch:  {
			sass: {
				files: ['sass/**/*'],
				tasks: ['sass'],
				options: {
					interrupt: false,
					spawn: false
				}
			},

			js: {
				files: ['js/**/*'],
				tasks: ['js'],
				options: {
					interrupt: false,
					spawn: false
				}
			}
		},

		// Concurrent
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			monitor: {
				tasks: ['watch:sass', 'watch:js']
			}
		},

		// Version update
		replace: {
			version: {
				src: ['dist/**/*.php'],
				overwrite: true,
				replacements: [{
					from: '{VERSION}',
					to: '<%= pkg.version %>'
				}]
			},
			readme: {
				src: [
					'README.md'
				],
				overwrite: true,
				replacements: [{
					from: 'Current Version : v' + grunt.option( 'oldver' ),
					to: 'Current Version : v' + grunt.option( 'newver' )
				}]
			}
		},

		// Add the version header
		usebanner: {
			release: {
				options: {
					position: 'top',
					banner: '/*!\n' +
							' * Material Blog v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
							' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
							' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
							' */',
					linebreak: true
				},
				files: {
					src: [ 'dist/css/*.css', 'dist/js/*.js' ]
				}
			}
		},

		// Move to distribution
		copy: {
			// Build the theme
			main: {
				files:  [
					// Move the theme files
					{ expand: true, cwd: 'theme/', src: ['**'], dest: 'dist/' },

					// Move the fonts
					{ expand: true, src: ['font/**'], dest: 'dist/' }
				]
			},

			// Copy the materialize resources
			src: {
				files: [
					// Copy the sass
					{ expand: true, cwd: 'bower_components/materialize/sass/', src: ['**'], dest: 'sass/' },

					// Copy the JS
					{ expand: true, cwd: 'bower_components/materialize/js/', src: ['**'], dest: 'js/' },

					// Copy the font icons
					{ expand: true, cwd: 'bower_components/materialize/font/', src: ['**'], dest: 'font/' }
				]
			},

			// Copy the distribution folder to local WordPress dev environment
			deploy: {
				files: [
					{ expand: true, cwd: 'dist/', src:['**'], dest: '../wordpress-trunk/wp-content/themes/material-blog/' }
				]
			}
		},

		// Compress our release
		compress: {
			main: {
				options: {
					archive: './release/<%= pkg.name =>.<%= pkg.version %>.zip',
					level: 6
				},
				files: [
					{ expand: true, cwd: 'release/', src: ['**/*'], dest: '<%= pkg.name =>/' },
					{ expand: true, cwd: './', src: ['LICENSE', 'README.md'], dest: '<%= pkg.name =>/' }
				]
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-concurrent' );
	grunt.loadNpmTasks( 'grunt-banner' );
	grunt.loadNpmTasks( 'grunt-text-replace' );

	grunt.registerTask(
		'build', [
			'copy:main',
			'css',
			'concat:dist',
			'uglify:dist',
			'usebanner:release',
			'replace:version',
			//'replace:readme',
			'deploy'
			//'compress:main'
		]
	);
	grunt.registerTask( 'js', ['concat:dist', 'uglify:dist'] );
	grunt.registerTask( 'css', ['sass:dev', 'cssmin'] );
	grunt.registerTask( 'deploy', ['copy:deploy'] );
	grunt.registerTask( 'source', ['copy:src'] );
	grunt.registerTask( 'monitor', ['concurrent:monitor'] );
};