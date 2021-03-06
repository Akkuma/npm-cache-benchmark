'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actionTypes = require('../actionTypes');

var expectedActionTypes = _interopRequireWildcard(_actionTypes);

var _propTypes = require('../propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('index', function () {
  it('should export actionTypes', function () {
    (0, _expect2.default)(_index.actionTypes).toEqual(expectedActionTypes);
  });
  it('should export arrayInsert', function () {
    (0, _expect2.default)(_index.arrayInsert).toExist().toBeA('function');
  });
  it('should export arrayMove', function () {
    (0, _expect2.default)(_index.arrayMove).toExist().toBeA('function');
  });
  it('should export arrayPop', function () {
    (0, _expect2.default)(_index.arrayPop).toExist().toBeA('function');
  });
  it('should export arrayPush', function () {
    (0, _expect2.default)(_index.arrayPush).toExist().toBeA('function');
  });
  it('should export arrayRemove', function () {
    (0, _expect2.default)(_index.arrayRemove).toExist().toBeA('function');
  });
  it('should export arrayRemoveAll', function () {
    (0, _expect2.default)(_index.arrayRemoveAll).toExist().toBeA('function');
  });
  it('should export arrayShift', function () {
    (0, _expect2.default)(_index.arrayShift).toExist().toBeA('function');
  });
  it('should export arraySplice', function () {
    (0, _expect2.default)(_index.arraySplice).toExist().toBeA('function');
  });
  it('should export arraySwap', function () {
    (0, _expect2.default)(_index.arraySwap).toExist().toBeA('function');
  });
  it('should export arrayUnshift', function () {
    (0, _expect2.default)(_index.arrayUnshift).toExist().toBeA('function');
  });
  it('should export autofill', function () {
    (0, _expect2.default)(_index.autofill).toExist().toBeA('function');
  });
  it('should export blur', function () {
    (0, _expect2.default)(_index.blur).toExist().toBeA('function');
  });
  it('should export change', function () {
    (0, _expect2.default)(_index.change).toExist().toBeA('function');
  });
  it('should export clearSubmitErrors', function () {
    (0, _expect2.default)(_index.clearSubmitErrors).toExist().toBeA('function');
  });
  it('should export destroy', function () {
    (0, _expect2.default)(_index.destroy).toExist().toBeA('function');
  });
  it('should export Field', function () {
    (0, _expect2.default)(_index.Field).toExist().toBeA('function');
  });
  it('should export Fields', function () {
    (0, _expect2.default)(_index.Fields).toExist().toBeA('function');
  });
  it('should export FieldArray', function () {
    (0, _expect2.default)(_index.FieldArray).toExist().toBeA('function');
  });
  it('should export Form', function () {
    (0, _expect2.default)(_index.Form).toExist().toBeA('function');
  });
  it('should export FormSection', function () {
    (0, _expect2.default)(_index.FormSection).toExist().toBeA('function');
  });
  it('should export focus', function () {
    (0, _expect2.default)(_index.focus).toExist().toBeA('function');
  });
  it('should export formValueSelector', function () {
    (0, _expect2.default)(_index.formValueSelector).toExist().toBeA('function');
  });
  it('should export getFormNames', function () {
    (0, _expect2.default)(_index.getFormNames).toExist().toBeA('function');
  });
  it('should export getFormValues', function () {
    (0, _expect2.default)(_index.getFormValues).toExist().toBeA('function');
  });
  it('should export getFormInitialValues', function () {
    (0, _expect2.default)(_index.getFormInitialValues).toExist().toBeA('function');
  });
  it('should export getFormSyncErrors', function () {
    (0, _expect2.default)(_index.getFormSyncErrors).toExist().toBeA('function');
  });
  it('should export getFormAsyncErrors', function () {
    (0, _expect2.default)(_index.getFormAsyncErrors).toExist().toBeA('function');
  });
  it('should export getFormSyncWarnings', function () {
    (0, _expect2.default)(_index.getFormSyncWarnings).toExist().toBeA('function');
  });
  it('should export getFormSubmitErrors', function () {
    (0, _expect2.default)(_index.getFormSubmitErrors).toExist().toBeA('function');
  });
  it('should export initialize', function () {
    (0, _expect2.default)(_index.initialize).toExist().toBeA('function');
  });
  it('should export isDirty', function () {
    (0, _expect2.default)(_index.isDirty).toExist().toBeA('function');
  });
  it('should export isInvalid', function () {
    (0, _expect2.default)(_index.isInvalid).toExist().toBeA('function');
  });
  it('should export isPristine', function () {
    (0, _expect2.default)(_index.isPristine).toExist().toBeA('function');
  });
  it('should export isValid', function () {
    (0, _expect2.default)(_index.isValid).toExist().toBeA('function');
  });
  it('should export isSubmitting', function () {
    (0, _expect2.default)(_index.isSubmitting).toExist().toBeA('function');
  });
  it('should export hasSubmitSucceeded', function () {
    (0, _expect2.default)(_index.hasSubmitSucceeded).toExist().toBeA('function');
  });
  it('should export hasSubmitFailed', function () {
    (0, _expect2.default)(_index.hasSubmitFailed).toExist().toBeA('function');
  });
  it('should export propTypes', function () {
    (0, _expect2.default)(_index.propTypes).toEqual(_propTypes2.default);
  });
  it('should export reducer', function () {
    (0, _expect2.default)(_index.reducer).toExist().toBeA('function');
  });
  it('should export reduxForm', function () {
    (0, _expect2.default)(_index.reduxForm).toExist().toBeA('function');
  });
  it('should export registerField', function () {
    (0, _expect2.default)(_index.registerField).toExist().toBeA('function');
  });
  it('should export reset', function () {
    (0, _expect2.default)(_index.reset).toExist().toBeA('function');
  });
  it('should export startAsyncValidation', function () {
    (0, _expect2.default)(_index.startAsyncValidation).toExist().toBeA('function');
  });
  it('should export startSubmit', function () {
    (0, _expect2.default)(_index.startSubmit).toExist().toBeA('function');
  });
  it('should export setSubmitFailed', function () {
    (0, _expect2.default)(_index.setSubmitFailed).toExist().toBeA('function');
  });
  it('should export setSubmitSucceeded', function () {
    (0, _expect2.default)(_index.setSubmitSucceeded).toExist().toBeA('function');
  });
  it('should export stopAsyncValidation', function () {
    (0, _expect2.default)(_index.stopAsyncValidation).toExist().toBeA('function');
  });
  it('should export stopSubmit', function () {
    (0, _expect2.default)(_index.stopSubmit).toExist().toBeA('function');
  });
  it('should export submit', function () {
    (0, _expect2.default)(_index.submit).toExist().toBeA('function');
  });
  it('should export SubmissionError', function () {
    (0, _expect2.default)(_index.SubmissionError).toExist().toBeA('function');
  });
  it('should export touch', function () {
    (0, _expect2.default)(_index.touch).toExist().toBeA('function');
  });
  it('should export unregisterField', function () {
    (0, _expect2.default)(_index.unregisterField).toExist().toBeA('function');
  });
  it('should export untouch', function () {
    (0, _expect2.default)(_index.untouch).toExist().toBeA('function');
  });
  it('should export values', function () {
    (0, _expect2.default)(_index.values).toExist().toBeA('function');
  });
});