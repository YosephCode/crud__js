module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('node_modules/grunt/package.json'),
        connect: {
            server: {
                options: {
                    hostname:'localhost',
                    port: 9000,
                    keepalive: true,
                    open: true
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect:server']);
};
