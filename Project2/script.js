const form = document.querySelector('form')

// this usecase will give us a empty value
// const height = parseInt(document.queryselctor('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')

    if(height === ' ' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`
    } else if(weight === ' ' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`
    } else{
        // we have checks every input and now we will calculate the BMI
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let statement = " is perfect"
        if(bmi < 18.6){
            statement="You are underweight, you need to take care of our diet."
        } else if(bmi > 24.9){
            statement = "You are overweight"
        }
        result.innerHTML = `<span>Your BMI is ${bmi} and ${statement}</span>`
    }
})