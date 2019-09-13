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
    btnClearPosts: "button.btn-clear-posts",
    postList: "section.demo-posts",
    tablePosts: "table.table-posts-body",
    modalBackdrop: ".backdrop",
    modal: ".modal"
  };
  var modalStopPropagation = function() {
    var modalElement = document.querySelector(domString.modal);
    modalElement.addEventListener("click", () => {
      event.stopPropagation();
    });
  };

  return {
    getDomString: function() {
      return domString;
    },
    renderPostTable: function(posts) {
      var innerhtml =
        "<tr><th>Post ID</th><th>Title</th><th>Body</th><th>Actions</th></tr>";
      posts.forEach(post => {
        innerhtml += post.tableRowTemplate;
      });
      console.log(innerhtml);
      var postsTableElement = document.querySelector(domString.tablePosts);
      postsTableElement.innerHTML = innerhtml;
    },
    clearPostTable: function() {
      var postsTableElement = document.querySelector(domString.tablePosts);
      postsTableElement.innerHTML = "";
    },
    modalHide: function() {
      if (event.target.className === domString.modalBackdrop.substr(1)) {
        document.querySelector(domString.modalBackdrop).style.display = "none";
      }
    }
  };
})();

var PostsController = (function() {
  var postList = [];
  function Post(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.tableRowTemplate = `<tr><td>${this.id}</td><td>${this.title}</td><td>${this.body}</td><td><button class="btn btn-primary">Comments</button></td></tr>`;
  }

  return {
    getPosts: function() {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
          postList = posts.map(post => {
            return new Post(post.id, post.title, post.body);
          });
          return postList;
        });
    },
    removePosts: function() {
      postList = [];
    }
  };
})();

var AppController = (function(UICtrl, PostCtrl) {
  var DOMString = UICtrl.getDomString();
  var hideModal = function() {
    UICtrl.modalHide();
  };

  var clearPosts = function() {
    // remove data
    PostCtrl.removePosts();
    // render
    UICtrl.clearPostTable();
  };

  var displayPosts = function() {
    // get Data
    // var posts = PostCtrl.getPosts();
    PostCtrl.getPosts().then(posts => {
      console.log(posts);
      UICtrl.renderPostTable(posts);
    });

    // render to screen
    // let innerHtml = "";
    // posts.forEach(function(post) {
    //   innerHtml += `<p>${post} Post</p>`;
    // });
    // document.querySelector(DOMString.postList).innerHTML = innerHtml;
  };

  var setupEventlistener = function() {
    // setup get posts
    var getPostsElement = document.querySelector(DOMString.btnGetPosts);
    getPostsElement.addEventListener("click", displayPosts);

    // setup clear posts
    var removePostsElement = document.querySelector(DOMString.btnClearPosts);
    removePostsElement.addEventListener("click", clearPosts);

    // setup modal cancel
    var backdropElement = document.querySelector(DOMString.modalBackdrop);
    backdropElement.addEventListener("click", hideModal);
  };

  return {
    init: function() {
      setupEventlistener();
    }
  };
})(UIController, PostsController);

AppController.init();
