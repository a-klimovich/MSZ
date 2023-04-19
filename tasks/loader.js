const { src, dest } = require("gulp");
const path = require('./config/path.js');

const loader = () => {
  return src(path.loader.src).pipe(dest(path.loader.build));
};

module.exports = loader;
