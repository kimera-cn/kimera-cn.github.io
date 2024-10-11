var posts=["2024/10/11/我的第一篇文章/","2024/10/10/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };