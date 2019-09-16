// var $ = (function () {
//     // implement ajax
//     var ajaxxx = function () {
//         // alert("@@@!")
//     };

//     // closure
//     return {
//         ajax: ajaxxx
//     };
// })();
// $.ajax();

// module design p

//// UIController /////////////////////////////////////////////////////////////////
var UIController = (function () {
    var domString = {
        btnGetPosts: 'button.btn-get-posts',
        btnClearPosts: 'button.btn-clear-posts',
        postList: 'section.demo-posts',
        tablePosts: 'table.table-posts-body',
        btnModalComments: '.btn-modal-comments',
        modalContainer: '.modal-container',
        modalBackdrop: '.backdrop',
        modal: '.modal',
        // btnGetPosts = 'input[type==button].btn-get-posts'
    };

    var modalStopPropagation = function () {
        var modalElement = document.querySelector(domString.modal);
        modalElement.addEventListener('click', () => {
            event.stopPropagation();
        });
    };

    return {
        getDomString: function () {
            return domString;
        },
        renderPostTable: function (posts) {
            var innerHTML = '<tr><th>PostID</th><th>Title</th><th>Body</th><th>Action</th></tr>';
            posts.forEach(e => {
                innerHTML += e.tableRowTemplate;
            });
            var postsTableElement = document.querySelector(domString.tablePosts);
            postsTableElement.innerHTML = innerHTML;
            // console.log(innerHTML)
        },
        clearPostsTable: function () {
            var postsTableElement = document.querySelector(domString.tablePosts);
            postsTableElement.innerHTML = '';
        },
        modalShow: function (item) {
            console.log(item)
            document.querySelector(domString.modalBackdrop).style.display = 'flex';
            document.querySelector(domString.modal).innerHTML = `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.body}</td></tr>`
        },
        modalHide: function () {
            if (event.target.className == domString.modalBackdrop.substr(1)) {
                document.querySelector(domString.modalBackdrop).style.display = 'none';
            }
            console.log(event);
            // console.log(event.target);
            // console.log(event.target.className);
        }
    }
})()

//// PostsController //////////////////////////////////////////////////////////////////
var PostsController = (function () {
    var postList = [];

    var Post = function (id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.tableRowTemplate = `<tr><td>${this.id}</td><td>${this.title}</td><td>${this.body}</td><td><button id='${this.id}' class='btn btn-primary btn-modal-comments'>comments</button></td></tr>`
    }

    return {
        getPosts: function () {
            return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(posts => {
                    postList = posts.map(post => {
                        return new Post(post.id, post.title, post.body)
                    });
                    console.log(postList)
                    return postList;
                });
        },
        removePosts: function () {
            postList = [];
        }
    }
})()

//// AppController ///////////////////////////////////////////////////////////////////
// app controller used to connect UIController and PostsController.
var AppController = (function (UICtrl, PostCtrl) {
    var DOMString = UICtrl.getDomString();

    var setupEventListener = function () {
        // setup get posts event
        var getPostsElement = document.querySelector(DOMString.btnGetPosts)
        // console.log(getPostsElement)
        getPostsElement.addEventListener('click', displayPosts)

        // setup remove posts event
        var removePostsElement = document.querySelector(DOMString.btnClearPosts)
        // console.log(removePostsElement)
        removePostsElement.addEventListener('click', clearPosts)

        // setup show modal event
        // asynchronous:
        // 1. after clicking GET POSTS button, post list (tableRowTemplate).
        // 2. in the list, it generated dynamic buttons in each <tr> to show comments in modal.
        // 3. use promise .then after post list. querySelectorAll dynamic buttons & addEventListener to all.

        // setup hide modal event
        var backdropElement = document.querySelector(DOMString.modalBackdrop)
        backdropElement.addEventListener('click', hideModal)
    }

    var displayPosts = function () {
        // ```get Data
        var posts = PostCtrl.getPosts();
        posts.then(p => {
            // console.log(p);
            UICtrl.renderPostTable(p)
        })
            .then(() => {
                // setup show modal event
                // asynchronous:
                // 1. after clicking GET POSTS button, post list (tableRowTemplate).
                // 2. in the list, it generated dynamic buttons in each <tr> to show comments in modal.
                // 3. use promise .then after post list. querySelectorAll dynamic buttons & addEventListener to all.
                document.querySelectorAll(DOMString.btnModalComments).forEach(btn => {
                    btn.addEventListener('click', showModal);
                });
            })

        // ```render to screen
        // let innerHTML = '';
        // posts.forEach(e => {
        //     innerHTML += `<p>${e}</p>`
        // })

        // document.querySelector(DOMString.postList).innerHTML = innerHTML;
    }

    var clearPosts = function () {
        // remove data
        PostCtrl.removePosts();

        // remove from render
        UICtrl.clearPostsTable();
    }

    var showModal = function () {
        let clickId = parseInt(event.target.getAttribute('id'))
        console.log('clickId', clickId)

        var posts = PostCtrl.getPosts();
        posts.then(list => {
            let clickItem = list.filter(item => { return item.id === clickId });
            // console.log('clickItem', clickItem[0]);

            UICtrl.modalShow(clickItem[0])
        })

    }


    var hideModal = function () {
        UICtrl.modalHide();
    }


    return {
        init: function () {
            setupEventListener()
        }
    }
})(UIController, PostsController)

AppController.init()
