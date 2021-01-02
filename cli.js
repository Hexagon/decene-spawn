var
    package= require('./package.json'),
    os = require('os'),
	args = require('minimist')(process.argv.slice(2), {
		string: ['ip','port','spawn','init',],
		boolean: ['version','help'],
		default: {
			address: '0.0.0.0',
            port: 47474,
            init: false,
			spawn: false,
            identity: os.homedir() + '/.decene.id',
            cache: os.homedir() + '/.decene.registry.cache',
            provide: false,
            request: false
		},
		alias: { v: 'version', h: 'help', a: 'address', p: 'port', s: 'spawn', i: 'identity', c: 'cache'}
	});

function printHeader() {
    console.log(package.name + " " + package.version);
    console.log("Copyright (c) 2020 " + package.author);
}

function printVersion() {
    console.log(package.name + " " + package.version);
    console.log("Copyright (c) 2020 " + package.author);
    console.log(package.license + " license");
}

function printHelp() {
    console.log(`
                --init          Generate RSA-keys and UUID
        -s      --spawn         

        -a      --address       Set listen ip (Default: 0.0.0.0) 
        -p      --port          Set public port (Default: 47474)

        -i      --identity      Identity file (Default: ~/.decene.id)
        -c      --cache         Cache file (Default: ~/.decene.registry.cache)

        -v      --version       Print version
        -h      --help          This help
    `);
}

if (args.version) {
    printVersion();
    process.exit(0);
}

if (args.help) {
    printVersion();
    printHelp();
    process.exit(0);       
}

module.exports = args;