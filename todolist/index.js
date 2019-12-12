let leftListTag = document.getElementById('leftList');
let rightListTag = document.getElementById('rightList');
let inputBar = document.getElementById('textBox');
let checkBoxCounter = 1;

// leftList, rightList, each element is li tag
// checkBoxCounter is a number
const state = {}

Object.defineProperty(state, 'leftList', {
    get() {
        return this._leftList
    },
    set(val) {
        this._leftList = val
        render()
        saveToStorage()
    }
})

Object.defineProperty(state, 'rightList', {
    get() {
        return this._rightList
    },
    set(val) {
        this._rightList = val
        render()
        saveToStorage()
    }
})

Object.defineProperty(state, 'checkBoxCounter', {
    get() {
        return this._checkBoxCounter
    },
    set(val) {
        this._checkBoxCounter = val
        saveToStorage()
    }
})

function render() {
    leftListTag.innerText = ''
    rightListTag.innerText = ''
    if (state.leftList) {
        state.leftList.forEach((li) => {
            leftListTag.appendChild(li)
        })
    }
    if (state.rightList) {
        state.rightList.forEach((li) => {
            rightListTag.appendChild(li)
        })
    }
}

function saveToStorage() {
    tmpL = state.leftList ? state.leftList.map(ele => ele.outerHTML) : []
    tmpR = state.rightList ? state.rightList.map(ele => ele.outerHTML) : []
    tmpCt = state.checkBoxCounter
    tmpState = { leftList: tmpL, rightList: tmpR, checkBoxCounter: tmpCt }
    localStorage.setItem('state', JSON.stringify(tmpState))
}

function createLiTag() {
    if (event.keyCode === 13) {
        let newLi = document.createElement('li');
        // event.target is the tag that trigger the event.

        // two way to get the text value
        // first is event.target.value
        // second way is use the getElementById
        // liSpan.innerText = document.getElementById('textBox').value
        newLi.appendChild(createSpan())
        newLi.appendChild(createBtn('Remove', 'click', buttonRemove))
        newLi.appendChild(createBtn('Edit', 'click', buttonEdit))

        state.leftList = [...state.leftList, newLi]
        // render()
        // saveToStorage();
        // leftListTag.appendChild(newLi)

        // to empty the input bar, we could use inputBar, or event.target
        // inputBar.value = ''
        event.target.value = ''

        // liButton.addEventListener('click', buttonRemove.bind(liButton))
    }
}

function createSpan() {
    let span = document.createElement('span')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')

    checkBox.type = 'checkbox';
    checkBox.id = 'ck' + state.checkBoxCounter

    label.for = 'ck' + state.checkBoxCounter
    label.innerText = inputBar.value

    state.checkBoxCounter += 1;

    span.append(checkBox)
    span.append(label)
    // `<li><span><input type="text"><label for=""></label></span><button></button><button></button></li>`
    return span
}

function createBtn(val, action, eventHandler) {
    let btn = document.createElement('button')
    btn.innerText = val;
    // btn[action] = eventHandler
    btn.addEventListener(action, eventHandler)
    return btn
}

function buttonRemove() {
    // this will be bind to the button object 
    // when button was created with addEventListerner
    console.log('remove button', this.parentElement)

    // * use event.target to get its parent
    if (event.target.parentElement.parentElement === leftListTag) {
        console.log('left ul')
        state.leftList = state.leftList.filter(li => li != event.target.parentElement)
    } else {
        console.log('right ul')
        state.rightList = state.rightList.filter(li => li != event.target.parentElement)
    }
    // render()
    // saveToStorage()
    // # 1 
    // * get the li tag that need be removed
    // rmli = this.parentElement;
    // * get the list tag and remove its child.
    // document.getElementById('list').removeChild(rmli);

    // # 2
    // * this is an alternative way to remove the tag
    // * the li tag still there, its disappear from screen
    // * only because the display was set to None;
    // this.parentElement.style.display = 'None';
}

function buttonEdit() {
    console.log('in edit', event.target);
    spanTag = event.target.parentElement.firstChild
    if (event.target.innerText === 'Edit') {
        let input = spanTag.firstChild;
        let label = input.nextSibling
        let curBtn = event.target
        input.type = 'text'
        input.value = label.innerText
        input.addEventListener('keyup', updateInput)
        label.innerText = ''
        //inputTag = addEditInputTag(spanTag);
        curBtn.innerText = 'Update'
        curBtn.removeEventListener('click', buttonEdit)
        curBtn.addEventListener('click', updateInput)
    }
}

function updateInput() {
    if (event.keyCode === 13 || event.type === 'click') {
        console.log('update input')
        let span;
        let textValue;
        let btnUpdate;
        // event.target.parentElement === span tag

        // beacuse event.target is the input that will be removed;
        // so we need use it to find our edit button firstly
        // then we could delete the input button
        // otherwise we cannot use event.target to get other element.
        if (event.keyCode === 13) {
            span = event.target.parentElement;
            textValue = event.target.value
            btnUpdate = span.parentElement.lastChild
        } else if (event.type === 'click') {
            span = event.target.parentElement.firstChild
            textValue = span.firstChild.value
            btnUpdate = event.target
        }
        span.parentElement.lastChild.innerText = 'Edit'
        span.firstChild.type = 'checkbox'
        span.lastChild.innerText = textValue
        // let cl = createInputLabel(textValue)
        // span.innerHTML = ''
        // span.appendChild(cl[0]);
        // span.appendChild(cl[1])
        span.firstChild.removeEventListener('keyup', updateInput)

        btnUpdate.removeEventListener('click', updateInput)
        btnUpdate.addEventListener('click', buttonEdit)
    }
}

function moveCheckedBox() {
    if (event.target.id === 'move-to-right') {
        let checked = state.leftList.filter(ele => ele.firstChild.firstChild.checked)
        state.leftList = state.leftList.filter(ele => !ele.firstChild.firstChild.checked)
        state.rightList = [...state.rightList, ...checked]
    }
    else if (event.target.id === 'move-to-left') {
        let checked = state.rightList.filter(ele => ele.firstChild.firstChild.checked)
        state.rightList = state.rightList.filter(ele => !ele.firstChild.firstChild.checked)
        state.leftList = [...state.leftList, ...checked]
    }
    // render()
    // saveToStorage()
}

function parseLocalStorage(ele) {
    let tmp = document.createElement('div')
    tmp.innerHTML = ele
    let li = tmp.firstChild
    let rm = li.firstChild.nextSibling
    let edit = li.lastChild
    rm.addEventListener('click', buttonRemove)
    edit.addEventListener('click', buttonEdit)
    return tmp.firstChild
}

function init() {
    stateLocal = JSON.parse(localStorage.getItem('state'))
    console.log(stateLocal)
    if (!Boolean(stateLocal)) {
        state.leftList = []
        state.rightList = []
        state.checkBoxCounter = 1;
    } else {
        state.leftList = stateLocal.leftList.map((ele) => {
            return parseLocalStorage(ele)
        })
        state.rightList = stateLocal.rightList.map((ele) => {
            return parseLocalStorage(ele)
        })
        state.checkBoxCounter = stateLocal.checkBoxCounter;
    }
}
init()