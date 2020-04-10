const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
const utils = require('../../scripts/utils.js');
const filehelper = require('../../scripts/initPage.js');

console.log(filehelper.getFileName(rootpath, "/blogs/css"));

module.exports = {
  title: 'XFE DOCUMENT',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'zheever/vuepress',
    sidebar: {
      '/blogs/': [
        {
          title:'css文档',
          collapsable: false,
          children:[
            '/blogs/css/css'
          ]
        },
        {
          title:'javascript文档',
          collapsable: false,
          children:[
            '/blogs/javascript/javascript'
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
