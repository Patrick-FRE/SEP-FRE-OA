// var $ = (function() {
//   // implement ajax
//   var ajaxxxxx = function() {
//     alert("it is working");
//   };

//   return {
//     ajax: ajaxxxxx
//   };
// })();
// $.ajax();

var UIController = (function() {
  var domString = {
    btnGetPosts: "button.btn-get-posts",
    postList: "section.demo-posts"
  };
  return {
    getDomString: function() {
      return domString;
    }
  };
})();

var PostsController = (function() {
  var postList = [];
  function Post(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.tableRowTemplate = `<tr> <td>${this.title}</td></tr>`;
  }

  return {
    getPosts: function() {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
          return posts.map(post => {
            return new Post(post.id, post.title, post.body);
          });
        });
    }
  };
})();

var AppController = (function(UICtrl, PostCtrl) {
  var DOMString = UICtrl.getDomString();

  var displayPosts = function() {
    // get Data
    // var posts = PostCtrl.getPosts();
    PostCtrl.getPosts().then(posts => {
      console.log(posts);
    });

    // render to screen
    // let innerHtml = "";
    // posts.forEach(function(post) {
    //   innerHtml += `<p>${post} Post</p>`;
    // });
    // document.querySelector(DOMString.postList).innerHTML = innerHtml;
  };

  var setupEventlistener = function() {
    var getPostsElement = document.querySelector(DOMString.btnGetPosts);
    getPostsElement.addEventListener("click", displayPosts);
  };

  return {
    init: function() {
      setupEventlistener();
    }
  };
})(UIController, PostsController);

AppController.init();
