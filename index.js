const arr = ['Bird seraphim above evilprophet my and scarcely i, the the with my word, name chamber nothing he he there its.',
'Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!',
'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes.',
'He along cheer pillared some pile Ah other the and at mother not Chill his youth he gild basked but aught.'];
const msg = document.getElementById('msg');
const button = document.getElementById('btn');
const txt = document.getElementById('text');
const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const start = () =>{
    arr.forEach(MyFunc);
    function MyFunc(value,index,arr){
        index=Math.floor(Math.random()*arr.length);
        msg.innerText = arr[index];
    }
    let date = new Date();
    startTime = date.getTime();
    
    
}
 const end = () =>{
    let date = new Date();
    endTime = date.getTime();
    let TimeGapping = ((endTime - startTime)/1000)
    let msgLength = msg.innerText.split(" ").length;
    const msgLength1 = msg.innerText.split(" ");
    let txtLength = txt.value.split(" ").length;
    var txtLength1 = txt.value.split(" ");
    if(JSON.stringify(msgLength1) === JSON.stringify(txtLength1)){
        msg2.innerText = `You Spelled All Right`;
        msg1.innerText = `you wrote the sentence ${TimeGapping} second per minute`;
        msg2.classList.add("msg2");
        document.getElementById('h5').innerText = 'Please refresh This web page to Start again';
        document.getElementById('h5').classList.add('h5');
    }
    else{
        let arrFilter = msgLength1.filter(x => txtLength1.indexOf(x) === -1);
        msg2.innerText = `You spelled wrong (${arrFilter})`;
        msg2.classList.add("c");
        document.getElementById('h5').innerText = 'Please refresh This web page to Start again';
        document.getElementById('h5').classList.add('h5');
    }
 }

button.addEventListener('click',function(){
    if(button.innerText == 'Start'){
        button.innerText = 'Done';
        txt.disabled = false;
        document.getElementById('h6').innerText = "*Don't give extra space";
        start();
    }
    else if(button.innerText == 'Done'){
        button.innerText = 'Start';
        txt.disabled = true;
        end();
    }
    
})

