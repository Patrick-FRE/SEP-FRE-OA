const todoData = [{id: 1, title: 'Buy A Book'},{id: 2, title: 'Buy A Car'},{id: 3, title: 'Buy A Ball'}]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todoData);
        },100)
    })
}