# Linking UI

This is a start to the linking UI that can be used by traders to update canonical linking without calling out individuals in TSI. It is a simple ReactJS application that has been created with create-react-app (see docs at the bottom).

### Table of Contents

- [Linking UI](#linking-ui)
    - [Table of Contents](#table-of-contents)
  - [Dependencies](#dependencies)
  - [Local Development](#local-development)
  - [UI](#ui)
    - [Routing](#routing)
  - [API](#api)
    - [Adding Endpoints](#adding-endpoints)
    - [Updating/Resetting Mappings](#updatingresetting-mappings)
  - [Building the App](#building-the-app)
  - [Testing](#testing)
    - [Unit Tests](#unit-tests)
    - [Integration Tests](#integration-tests)
  - [Linting](#linting)
  - [To Do](#to-do)
  - [Create React App](#create-react-app)
    - [Getting Started with Create React App](#getting-started-with-create-react-app)
      - [Available Scripts](#available-scripts)
        - [`npm start`](#npm-start)
        - [`npm test`](#npm-test)
        - [`npm run build`](#npm-run-build)
        - [`npm run eject`](#npm-run-eject)
      - [Learn More](#learn-more)

## Dependencies

* Docker
* NodeJS (to link, test or build locally. Developement can be done without installing anything)

## Local Development

There is a docker compose configuration which enables local development. This can be run by using the basic docker compose commands eg.
```
$ npm install
$ docker compose up -d
```

The local environment runs with two containers. One for the UI and another for the mock API.

In order to view the logs for either application, use `docker compose logs`.
eg.
```
$ docker compose logs -f api
```

The usage of any docker commands is very useful and can be inspected by passing the `--help` option.

```
$ docker compose --help

Usage:  docker compose [OPTIONS] COMMAND

Define and run multi-container applications with Docker.

Options:
      --ansi string                Control when to print ANSI control characters ("never"|"always"|"auto") (default "auto")
      --compatibility              Run compose in backward compatibility mode
      --dry-run                    Execute command in dry run mode
      --env-file stringArray       Specify an alternate environment file.
  -f, --file stringArray           Compose configuration files
      --parallel int               Control max parallelism, -1 for unlimited (default -1)
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
                                   (default: the path of the, first specified, Compose file)
  -p, --project-name string        Project name

Commands:
  build       Build or rebuild services
  config      Parse, resolve and render compose file in canonical format
  cp          Copy files/folders between a service container and the local filesystem
  create      Creates containers for a service.
  down        Stop and remove containers, networks
  events      Receive real time events from containers.
  exec        Execute a command in a running container.
  images      List images used by the created containers
  kill        Force stop service containers.
  logs        View output from containers
  ls          List running compose projects
  pause       Pause services
  port        Print the public port for a port binding.
  ps          List containers
  pull        Pull service images
  push        Push service images
  restart     Restart service containers
  rm          Removes stopped service containers
  run         Run a one-off command on a service.
  start       Start services
  stop        Stop services
  top         Display the running processes
  unpause     Unpause services
  up          Create and start containers
  version     Show the Docker Compose version information

Run 'docker compose COMMAND --help' for more information on a command.

$ docker compose logs --help

Usage:  docker compose logs [OPTIONS] [SERVICE...]

View output from containers

Options:
      --dry-run         Execute command in dry run mode
  -f, --follow          Follow log output.
      --no-color        Produce monochrome output.
      --no-log-prefix   Don't print prefix in logs.
      --since string    Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)
  -n, --tail string     Number of lines to show from the end of the logs for each container. (default "all")
  -t, --timestamps      Show timestamps.
      --until string    Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)
```

## UI

The UI is a React.JS application that has been bootstrapped using create-react-app and developed using Typescript.

### Routing

The routing is implemented using React Router.

The router is implemented in such a way that there is a sidebar, paired with a main admin area. This means that all pages are actually child pages of the root.

Pages that are dynamic, such as the player or team pages have the ID passed in through the URL and picked up using the [data loaders](https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders).

Developer documents can be found [here](https://reactrouter.com/en/main).

## API

The mock API is implemented by utilising a Wiremock image.

### Adding Endpoints

The endpoints are [stubbed](https://wiremock.org/docs/stubbing/) using json files within the `dev/mappings` directory. Multiple stubs can be contained in a single file. If you are adding or updating any mappings, they need to be reset with a curl request to Wiremock, see [below](#updatingresetting-mappings).

Rather than adding large blocks of JSON for response payloads, fixtured data files can be define. These should be created and maintained in `dev/__files`. This directory along with the mappings files are mounted into the Wiremock container via a volume in defined in the docker compose configuration.

### Updating/Resetting Mappings

If you are actively working on updating mappings/files in the wiremock back end, you don't want to repeatedly have to tear down and spin up the containers constantly. You can pick up the changes by resetting the mapping. That is done by running the following command...
```
$ curl -s --request POST http://localhost:8080/__admin/mappings/reset
```

## Building the App

The app is can be built into a docker image using the `docker build` command. There is a two stage build file that is in this repo.

```
$ docker build -t linking-ui:latest .
```

## Testing

In order to run both the unit and integration tests, simply run `npm test`. It will initially run the unit tests. If they are all successful, the integration tests will then be executed against a local setup.

### Unit Tests

The unit tests are implemented using Jest and the React Testing Library. A great resourse into this can be found on [freeCodeCamp](https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/). The tests can be executed by running `npm run test:unit` or `npm run test:unit:watch`.

### Integration Tests

Integration tests have initially been set up using [Playwrite](https://playwright.dev/). With there being multiple instances of the application, the url needs to be passed to the tests by using the environment variable `APP_URL`. Becuase of the different instances, run commands have been set for each...

| Environment  | Command                               | App URL               |
|--------------|---------------------------------------|-----------------------|
| Local        | `npm run test:integration:local`      | http://localhost:3000 |
| Test         | `npm run test:integration:test`       | TBC                   |
| Staging      | `npm run test:integration:staging`    | TBC                   |
| Production   | `npm run test:integration:production` | TBC                   |

For the local tests, there is a hook set up to spin up the environment before the tests. If the tests are successful, there is also a hook to tear it down again. If there is a failure in the tests, the clean up hook will not be invoked.

In order to view the last report, run `npm run test:integration:report`.

## Linting

There have been two linting commands set up for convenience. To run the linter run `npm run lint`. To fix issues that can be automatically, run `npm run lint:fix`.

## To Do

* Long term home
* Unit testing
* Integration testing
* Deployment pipelines

## Create React App

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).