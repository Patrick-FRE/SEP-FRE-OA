import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[
    ` 
    .change{
           color:white;
       }
    `]
})

export class ServerComponent{
    name:string = 'Qicheng';
    age:number = 26;
    status:string = 'single';
    username:string = ''; 
    btnClick = true;
    btnArr = [];
    index = 1;
    flag = false;

    onBtnClick(){
        this.btnClick = this.btnClick ? false : true;
        this.btnArr.push(this.index);
        this.index++;
        if(this.index === 6)
            this.flag = true;
    }
    getColor(){
        return this.flag ? 'blue' : 'white';
    }
    // allowflag:boolean = true;

    // checkEmpty(){
    //     this.username = "";
    //     // this.allowflag = true;
    // }
    // disBtn(){
    //     if(this.username === "")
    //         this.allowflag = true;
    //     else
    //         this.allowflag = false;
    // }
}