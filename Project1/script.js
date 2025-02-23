const boxes = document.querySelectorAll('.box')
const body = document.querySelector('body')

boxes.forEach((box)=>{
    // console.log(box)
    box.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target)

        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor = e.target.id
                break;
            case "white" :
                body.style.backgroundColor = e.target.id
                break;
            case "blue" :
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "purple":
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})