class Q {
    constructor() {
        this.input;
        this.output;
    }
    exec() {
        this.output=undefined;
    }
    test(newinput) {
        this.input = newinput;
        this.exec();
        console.log(this)
    }
}
console.log('\n')
console.log('question :')
q11 = new Q11()
