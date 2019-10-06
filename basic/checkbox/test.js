
var count = 0;
var storage = []
function checking(){
    if (document.getElementById("why").checked){
        count += 1
        storage.push(count)
        if (storage.length===3){
            storage[0] = document.getElementById("why").checked=false
            storage.shift()
        }
    } else if (document.getElementById("what").checked){
        count += 1
        storage.push(count)
        if (storage.length===3){
            storage[0] = document.getElementById("what").checked=false
            storage.shift()
        }
    } else if (document.getElementById("how").checked){
        count += 1
        storage.push(count)
        if (storage.length===3){
            storage[0] = document.getElementById("how").checked=false
            storage.shift()
        }
    } else if (document.getElementById("when").checked){
        count += 1
        storage.push(count)
        if (storage.length===3){
            storage[0] = document.getElementById("when").checked=false
            storage.shift()
        }
    }

}