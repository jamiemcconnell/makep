# makep
I've been obsessed with Makefiles as an easy way to see what I need to do to run a project.
Unfortunatly a lot of developers do not create them, causing me to have to ```cat package.json``` just to figure out what scripts to run.

Run `makep` in a folder with a `package.json` and it'll display a list of commands that can be used in the current package.

## Installation
```npm install -g makep```
## Run
In a folder with a `package.json`
`makep`

#### Example with `serverless`
```javascript
serverless - Serverless Framework - Build web, mobile and IoT applications with serverless architectures using AWS Lambda, Azure Func...
Usage: makep <command>

test                         istanbul cover -x '**/*.test.js' node_modules/mocha/bin/_mocha '!(node_modules)/**/*.test.js' --...
lint                         eslint . --cache
docs                         node scripts/generate-readme.js
simple-integration-test      jest --maxWorkers=5 simple-suite
complex-integration-test     jest --maxWorkers=5 integration
postinstall                  node ./scripts/postinstall.js
```

