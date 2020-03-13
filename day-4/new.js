class State {
     constructor(name, age) {
          this._person = { name: name, age: age }
     }
     get person() {
          console.log("get")
          return this._person;
     }
     set person(newPerson) {
          console.log("Set")
          this._person = newPerson;
     }
}

let state = new State("Md", 25);
state.person.name = "changed";
console.log(state.person);