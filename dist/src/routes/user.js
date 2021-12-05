"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _addProfilePicture = require("../controllers/user/addProfilePicture");

var _getUser = require("../controllers/user/getUser");

var _multerConfig = _interopRequireDefault(require("../middleware/multer-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRoutes = new _express.Router();
userRoutes.get("/:id", _getUser.getUser);
userRoutes.post('/update', _multerConfig.default, _addProfilePicture.addProfilePicture);
var _default = userRoutes;
exports.default = _default;