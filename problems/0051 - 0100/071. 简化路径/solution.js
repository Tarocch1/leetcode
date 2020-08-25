/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const paths = path.split('/');
  const result = [];
  paths.forEach(function (p) {
    switch (p) {
      case '':
      case '.':
        break;
      case '..':
        result.pop();
        break;
      default:
        result.push(p);
        break;
    }
  });
  return `/${result.join('/')}`;
};
