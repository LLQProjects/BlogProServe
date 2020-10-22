const { Blog, User } = require('./seqInit')

!(async function () {

  // 删除博客
  const delBlog = await Blog.destroy({   //是否删除成功 > 0
    where: {
      id: '12'
    }
  })

  // 删除用户：因为blog belongsTo User，所以会连带删除博客
  const delUser = await User.destroy({
    where: {
      id: '12'
    }
  })


})()