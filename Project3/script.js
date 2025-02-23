const clock = document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString())

setInterval(()=>{
    // console.log("Hello")
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.textContent = date.toLocaleTimeString()
} , 1000)

// setInterval is used to repeat a particular task after a particular interval
