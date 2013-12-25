# StartingPointJS

- [Demo](#demo)
- [Description](#description)
- [How to start](#start)
- [Development](#development)
- [Heroku](#heroku)
- [List of modules and frameworks](#modules)

## Demo
[StartingPointJS Demo](http://startingpointjs.herokuapp.com)

## Description
This is small template of web-app well tuned for fast building robust web-app based on JavaScript technologies.

## How to start

Get code
```shell
git clone https://github.com/fealaer/StartingPointJS.git <name-of-your-project>
cd <name-of-your-project>
./github.sh <url-to-your-github-repository>
```

Test that everything works fine
```shell
npm install && bower install && npm test
```

Change application name and description in

* package.json
* bower.json

Configure your server application in server/config/config.json

**Note:** Also you can change an AngularJS app name in client js scripts

## Development

Run server in development mode
```shell
npm start
```

Run all tests
```shell
npm test
```

For run in production mode use
```shell
NODE_ENV=production node server/app.js
```

## Heroku

Configure heroku

**Note:** you need to set up heroku tools first

New project

```shell
./heroku.sh <name-of-your-project>
```

If project already exists

```shell
git remote add <url-to-your-heroku-repository>
```

For release on heroku

**Note:** you need to configure heroku first

**Note:** branch release will be updated to master and released

```shell
./release.sh
```

## List of modules and frameworks

* Yeoman
* Grunt
* Bower
* AngularJS
* jQuery
* HTML5 Boilerplate
* Bootstrap
* NodeJS
* ExpressJS
* MongoDB
* Mongoose
* Karma
* Mocha