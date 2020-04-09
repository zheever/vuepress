const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
const utils = require('../../scripts/utils.js');
const filehelper = require('../../scripts/initPage.js');

console.log(utils.genSidebar('javascript', filehelper.getFileName(rootpath+"/"), true));

module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'zheever/vuepress',
    sidebar: {
      '/blogs/': [
        {
          title:'css',
          collapsable: true,
          children:[
            '/blogs/css/css-rule'
          ]
        },
        {
          title:'javascript',
          collapsable: true,
          children:[
            '/blogs/javascript/js-rule'
          ]
        }
      ]
    },
    // sidebar: {
    //   '/css/': utils.genSidebar('css', filehelper.getFileName(rootpath+"/css"), false),
    //   '/javascript/': utils.genSidebar('javascript', filehelper.getFileName(rootpath+"/javascript"), false)
    // },
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
