// function ajax(options) {
//     const defaultOptions = {
//         method: "get",
//         url: "/"
//     }
//     const opt = {
//         ...defaultOptions,
//         ...options
//     }
//     console.log(opt)
// }

function ajax({
    method = "get",
    url = "/"
} = {}) {
    console.log(method, url)
}

ajax()