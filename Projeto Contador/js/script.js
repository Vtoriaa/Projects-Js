const value = document.getElementById('value')
const buttonLess = document.getElementById('less')
const buttonMore = document.getElementById('more')
const buttonReset = document.getElementById('reset')

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalid = 0;

    buttonLess.addEventListener('click', () =>{
    intervalid = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);     
    });

    buttonMore.addEventListener('click', () =>{
        intervalid = setInterval(() => {
            count -= 1;
            updateValue();
        }, 100);     
        });
    buttonReset.addEventListener('click', () => {
        count =0;
        updateValue ();
    })

    document.addEventListener('mouseup', () => clearInterval(intervalid))