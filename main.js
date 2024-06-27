
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    addItem();
});

function addItem(){
    let input = document.getElementById('dataInput');
    let numberInput = input.value;
    console.log (numberInput)

    if (numberInput > 65){
        console.log('You are Senior')
        document.getElementById('output').innerHTML = 'You are Senior'
    } else if(numberInput > 25) {
        console.log('You are Adult');
          document.getElementById('output').innerHTML = 'You are Adult'
    } else if(numberInput > 15){
        console.log('You are Youth')
          document.getElementById('output').innerHTML = 'You are Youth'
    } else {
        console.log('You are Children')
        document.getElementById('output').innerHTML = 'You are Children'
    };
};