
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  resolve:{
      alias:{
          '@' :path.join(__dirname,'/src')//设置绝对路径
            } 
         }
}
