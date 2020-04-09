const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
const utils = require('../../scripts/utils.js');
const filehelper = require('../../scripts/initPage.js');

module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'zheever/vuepress',
    sidebar: {
      '/doc/css/': utils.genSidebar('css', filehelper.getFileName(rootpath+"/css"), false)
    },
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
