const glob = require("glob");

function creatEntry() {
  let entryObj = {};
  glob.sync("./src/views/**/index.html").forEach(val => {
    let url = val.split("/")[3];
    entryObj[url] = {
      entry: `src/views/${url}/main.js`,
      template: `src/views/${url}/index.html`,
      filename: `${url}.html`
    };
  });
  return entryObj;
}
let test = creatEntry();
console.log(test);
module.exports = {
  pages: creatEntry()
};
