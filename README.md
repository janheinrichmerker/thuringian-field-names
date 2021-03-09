[![CI](https://img.shields.io/github/workflow/status/heinrichreimer/thuringian-field-names/CI?style=flat-square)](https://github.com/heinrichreimer/thuringian-field-names/actions?query=workflow%3A"CI")
[![Code coverage](https://img.shields.io/codecov/c/github/heinrichreimer/thuringian-field-names?style=flat-square)](https://codecov.io/github/heinrichreimer/thuringian-field-names/)
[![Issues](https://img.shields.io/github/issues/heinrichreimer/thuringian-field-names?style=flat-square)](https://github.com/heinrichreimer/thuringian-field-names/issues)
[![Commit activity](https://img.shields.io/github/commit-activity/m/heinrichreimer/thuringian-field-names?style=flat-square)](https://github.com/heinrichreimer/thuringian-field-names/commits)
[![License](https://img.shields.io/github/license/heinrichreimer/thuringian-field-names?style=flat-square)](LICENSE)

# 🏞️ thuringian-field-names

Explorer for the [Thuringian Field Name Archive](http://projekte.thulb.uni-jena.de/flurnamen/).

_The project is developed as part of the [Client-side web applications](https://mht.uzi.uni-halle.de/client-seitige-web-anwendungen/) lecture at [Martin Luther University Halle-Wittenberg](https://uni-halle.de)._

## User stories

Please refer to the [user stories](docs/user-stories.md) for details on the implemented features.

## Usage

The field name explorer is a [React](https://reactjs.org/) app, built and run with [Yarn](https://yarnpkg.com/).
Note that you must specify [API credentials](#api-credentials) for the app to work.

### Run

Run the app locally in development mode (page reloads on edits):

```shell script
yarn start
```

Now you use the app from [http://localhost:3000](http://localhost:3000) in your web browser

### Test

Launch the interactive Cypress test runner:

```shell script
yarn cypress:open
```

For more information, see the [`cypress`](cypress) directory.

### Bundle

Build the app for production:

```shell script
yarn build
```

You'll find the bundled and optimized app in the `build` folder, ready for deployment.

### API credentials

For accessing the field name API, you must specify username and password to the backend API.
Create a file `.env.local` with the following content (replace `user` and `pass` with your credentials):

```properties
REACT_APP_API_USERNAME=user
REACT_APP_API_PASSWORD=pass
```

The app won't work without specifying API credentials.
Note that you need to [restart](#run) the development server for changes to take effect.

It is recommended to also specify a [Google Maps API](https://developers.google.com/maps/documentation/javascript) key in the same `.env.local` file (replace `key` with your API key):

```properties
REACT_APP_GOOGLE_API_KEY=key
```

You can find instructions [here](https://developers.google.com/maps/gmp-get-started) on how to get an API key.
If no Google API key is specified, maps will appear greyed-out with development watermarks.

## License

This project is [MIT licensed](LICENSE), you can use it for whatever you want as long as you mention this repository.
We use the [React](https://reactjs.org/) framework which is also [open source](https://github.com/facebook/react/blob/master/LICENSE).
Some texts used in the app are copyright of the [Thuringian Field Name Archive](http://projekte.thulb.uni-jena.de/flurnamen/).
