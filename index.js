cons program = require('commander');

program
    .command('open <type>')
    .alias('o')
    .description('Open specified database entry with command specified in settings (Default is "epy")')
    .action(function (file) {
    });

program.parse(process.argv);
