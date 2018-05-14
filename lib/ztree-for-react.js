'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('ztree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ztreeIndex = 0;
var _ztree = (window || global).ztree = {};

var ReactZtree = function (_Component) {
  _inherits(ReactZtree, _Component);

  function ReactZtree(props) {
    _classCallCheck(this, ReactZtree);

    return _possibleConstructorReturn(this, (ReactZtree.__proto__ || Object.getPrototypeOf(ReactZtree)).call(this, props));
  }

  _createClass(ReactZtree, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderZtreeDom();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderZtreeDom();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.ztreeObj && this.ztreeObj.destroy();
    }
  }, {
    key: 'renderZtreeDom',
    value: function renderZtreeDom() {
      var ztreeObj = this.ztreeObj = _jquery2.default.fn.zTree.init(this.getTreeDom(), this.getTreeSetting(), this.props.nodes);
      if (this.props.treeName && typeof this.props.treeName === 'string') {
        _ztree[this.props.treeName] = ztreeObj;
      }
      return ztreeObj;
    }
  }, {
    key: 'getTreeDom',
    value: function getTreeDom() {
      return (0, _jquery2.default)(this.refs.ztree);
    }
  }, {
    key: 'getTreeSetting',
    value: function getTreeSetting() {
      var props = this.props;
      return {
        treeId: props.treeId,
        treeObj: props.treeObj,
        async: props.async,
        callback: props.events,
        check: props.check,
        data: props.data,
        edit: props.edit,
        view: props.view
      };
    }
  }, {
    key: 'getTreeObj',
    value: function getTreeObj() {
      return this.ztreeObj;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'ztree', ref: 'ztree', id: 'ztree_' + ztreeIndex++ });
    }
  }]);

  return ReactZtree;
}(_react.Component);

exports.default = ReactZtree;
