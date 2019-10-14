// var $ = function(selector) {
//   var elements;
//   if (selector === document) {
//     elements = [document];
//   } else {
//     elements = document.querySelectorAll(selector);
//   }

//   return {
//     ready: function(cb) {
//       elements.forEach(item => {
//         item.addEventListener("DOMContentLoaded", cb);
//       });
//     }
//   };
// };

// Assignment
// $("button").click(function(){
//   $.ajax({url: "demo_test.txt", success: function(result){
//     $("#div1").html(result);
//   }});
// });

var $ = (function() {
  class MyJquery {
    constructor(selector) {
      if (selector === document) {
        this.elements = [document];
      } else {
        this.elements = document.querySelectorAll(selector);
      }
    }
    ready(cb) {
      this.elements.forEach(item => {
        item.addEventListener("DOMContentLoaded", cb);
      });
    }
    click(cb) {
      this.elements.forEach(item => {
        item.addEventListener("click", cb);
      });
    }

    toggle() {
      this.elements.forEach(item => {
        if (item.style.display === "none") {
          item.style.display = "initial";
        } else {
          item.style.display = "none";
        }
      });
    }

    hide() {
      this.elements.forEach(item => {
        item.style.display = "none";
      });
    }

    show() {
      this.elements.forEach(item => {
        item.style.display = "intial";
      });
    }

    css(attr, value) {
      this.elements.forEach(item => {
        item.style[attr] = value;
      });
    }
  }

  var instance = function(selector) {
    return new MyJquery(selector);
  };

  return instance;
})();

$(document).ready(function() {
  //   var a = document.getElementById("p");
  //   var btn = document.querySelector(".btn");
  //   btn.addEventListener("click", () => {
  //     a.style.display = "none";
  //   });
  console.log("jquery works");
  console.log($);

  // by Jquery
  var a = $("#p");
  var btn = $(".btn");
  console.log(a);
  console.log(btn);

  btn.click(() => {
    //console.log("click");
    a.toggle();
  });
});

// var a = document.getElementById("p");
// console.log("jquery workds");
// console.log(a);
