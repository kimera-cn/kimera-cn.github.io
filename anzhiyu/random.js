var posts=["2024/10/11/我的第一篇文章/","2024/10/12/JavaScript-DOM/","2024/11/16/事件高级/","2024/11/21/Vue生命周期/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };