queue = []
function checking(id){
    queue.push(id)
    if (queue.length>2 || queue[1]==queue[2]){
        queue.pop()
    }
    if(queue.length >= 3 || queue.id != queue.id){
            queue[0].checked=false
            queue.shift()
    }
}