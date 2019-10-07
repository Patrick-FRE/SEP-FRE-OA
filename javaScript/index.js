// function Player(name, age, gender) {
//   this.name = name !== undefined ? name : "unknown";
//   this.age = age !== undefined ? age : "unknown";
//   this.gender = gender !== undefined ? age : "unknow";
// }

// Player.prototype.move = function() {
//   console.log("class move");
// };

// function TTTPlayer(name, age, gender, nickName) {
//   Player.call(this, name, age, gender);
//   this.nickName = nickName;
// }

// TTTPlayer.prototype = Object.create(Player.prototype);
// TTTPlayer.prototype.constructor = TTTPlayer;

// var ply1 = new Player("Patrick", "", "");
// ply1.move();

// var ply2 = new TTTPlayer("patrick", "30", "male", "pat");
// ply2.move();

class Player {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  move() {
    console.log("Player move");
  }
}

class TTTPlayer extends Player {
  constructor(name, age, gender, nickName) {
    super(name, age, gender);
    this.nickName = nickName;
  }

  move() {
    console.log("TTTPlayer move");
  }
}

var a = new TTTPlayer("patrick");
a.move();
// //console.log(a);
// a.move();

// var test = a.move;
// test();

// (function() {
//   "use strict";
//   var a = {
//     foo: function() {
//       console.log(this);
//     }
//   };

//   // a.foo();

//   var b = a.foo;
//   b();
// })();
