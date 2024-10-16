var posts=["2024/10/11/我的第一篇文章/","2024/10/12/JavaScript-DOM/","2024/10/11/JavaScript之操作元素/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };