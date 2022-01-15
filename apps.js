

 

const Name = document.getElementById('Name')
const Age = document.getElementById('Age')
const male = document.getElementById('male')
const female = document.getElementById('female')
const output = document.getElementById('output')
const check = document.getElementById('check')


check.addEventListener('click', function(){

    if (Name.value == '' || Age.value == ''){
        output.innerHTML = `<p class = "alert alert-danger">All file ar requerd</p>`;
    }else {
        if (male.value == 'male') {
            output.innerHTML = `hi ${Name.value} ${formale(Age.value)}`;
        }else if (female.value == 'female'){
            output.innerHTML = `h1 ${Name.value} ${forfemale(Age.value)}`;
        }
    }

});




