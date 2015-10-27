module.exports = function(grunt) {
	console.log('Starts Grunt'); 
	// Task configuration will go here
	grunt.initConfig({
		// SASS task config
		sass: {
			dist: {
				options: {
					style: 'expanded' 
				}, 
				files: {
					// destination              // source file
					"site/css/fonts.css" : 		"site/sass/fonts.scss", 
					"site/css/general.css" : 	"site/sass/general.scss", 
					"site/css/header.css" : 	"site/sass/header.scss" , 
					"site/css/contacto.css" : 	"site/sass/contacto.scss" 
				}
			}
		}, 
		// Babel task config 
		//"babel": {
		//	options: {
		//		sourceMap: false
		//	},
		//	dist: {
		//		files: {
		//		"site/js/ux.js": "site/babel/ux.js"
		//		}
		//	}
		//},
		// Watch task config
		watch: {
			options: { livereload: 35729 }, 
			sass: {
				files: "site/sass/*.scss",
				tasks: ['sass'] 
			},  
			//babel: {
			//	files: 'site/babel/*.js', 
			//	tasks: ['babel']
			//}, 
			html: {
				files: ['*.html']
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass' ,'watch']); 
	//grunt.registerTask('default', ['sass', 'babel' ,'watch']); 
};