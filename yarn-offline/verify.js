[
  'chai',
  'classnames',
  'cookie-parser',
  'd3',
  'debug',
  'dedent',
  'errorhandler',
  'es6-map',
  'history',
  'invariant',
  'jquery',
  'lightbox2',
  'lodash',
  'method-override',
  'moment',
  'moment-timezone',
  'morgan',
  'mousetrap',
  'normalize-url',
  'normalizr',
  'object.assign',
  'react',
  'react-addons-shallow-compare',
  'react-bootstrap',
  'react-codemirror',
  'react-dom',
  'react-fontawesome',
  'react-motion',
  'react-no-ssr',
  'react-pure-render',
  'react-redux',
  'react-router',
  'react-router-bootstrap',
  'react-router-dom',
  'react-router-redux',
  'react-youtube',
  'redux',
  'redux-actions',
  'redux-create-types',
  'redux-epic',
  'redux-form',
  'request',
  'reselect',
  'rx',
  'sanitize-html',
  'validator'
].forEach(dependency => {
  try {
    require.resolve(dependency);
  } catch (err) {
    console.error(`${dependency} was not installed correctly`);
    process.exit(1);
  }
});
