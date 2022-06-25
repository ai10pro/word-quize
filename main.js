//一秒ごとにカウントされるプログラム
/*  
let counter = 0;
function exeCount() {
    counter ++ ;
    return counter;
}

function showExeCount() {
    let timeElement =  document.getElementById('time');
    timeElement.innerText = exeCount();

}
setInterval(showExeCount, 1000);

*/

//キーボードを押すたびにカウントするプログラム(1)
/*
let counter = 0;
function exeCount() {
    counter ++ ;
    return counter;
}
function showExeCount() {
    let countElement = document.getElementById('keyboardinput');
    countElement.innerText = exeCount();
    
}
document.body.onkeydown = showExeCount;


let counter = {
    counter: 0,
    execount: function() {
        counter.counter ++ ;
        return counter.counter;
    },
    showExeCount: function() {
        const countElement = document.getElementById('keyboardinput');
        countElement.innerText = counter.execount();
        if (counter.counter % 2 === 0) {
            countElement.className = 'red';
        } else {
            countElement.className = 'blue';
        }
    }
}
document.body.onkeydown = counter.showExeCount;
//document.getElementsByClassName("button").onclick = counter.showExeCount();
const targetDiv = document.getElementById('virtualkeyabord');
targetDiv.onclick = () =>{
    console.log('ボタンが押された');
    counter.showExeCount();
    
}
*/

let wordgame = {
    question: "りんごの英単語は？",
    correct: "apple",
    evaluation: function (answer) {
        return wordgame.correct === answer;

    }
    
};
const questionElement = document.getElementById('question');
questionElement.innerText = wordgame.question;

let inputKeys = "";

function showExeCount(event) {
    let inputKey;
    if(event.key) {
        inputKey = event.key;
    } else {
        inputKey = event.target.innerText;
    }

    const resultElement = document.getElementById("body");
    resultElement.className = "result-hidden";

    //何も要素がなければ処理しない
    if(!inputKey) {
        return;
    }
    // enter,delete 以外の２文字以上の入力は行わない
    if(inputKey != "Enter" && inputKey != "Delete" && inputKey.length >=2) {
        return;
    }
    //数字も扱わない
    if (!Number.isNaN(Number(inputKey))) {
        return;
    }
   
    if (inputKey == "Enter") {
        //console.log("Enterが押されました");
        wordgame.evaluation();
        const resultElement = document.getElementById("body");
        resultElement.className = "bodyB";
        if(wordgame.evaluation(inputKeys)){
            resultElement.innerText = " 正解";
        } else {
            resultElement.innerText = "不正解";
        }
    }

    if (inputKey == "Delete") {
        console.log("Deleteが押されました");
        let deleteLast = inputKeys.substring(0, inputKeys.length - 1);
        console.log(deleteLast);
        inputKeys = deleteLast;
        resultElement.innerText = "";
    } else {
        if (inputKey === "Enter"){
            return;
        }else{
            inputKeys += inputKey ;
        }
        
    }
    
    
    
    console.log(inputKey); // -> 「a」のキーボードまたはボタンを押すと「a」と出力される
    const keyboardinput = document.getElementById('keyboardinput');
    keyboardinput.innerText = inputKeys;
    
}
document.onkeydown = showExeCount;




function showAlphabet(){
    const targetDiv = document.getElementById('virtualkeyabord');
    
    for (let i = 97; i < 123 ; i++){
        const az = String.fromCharCode(i);
        const button = document.createElement('button');
        button.innerText = az;
        button.onclick = showExeCount;
        targetDiv.appendChild(button);
    }

    const enterbutton = document.createElement('button');
    enterbutton.innerText = 'Enter';
    enterbutton.onclick = showExeCount;
    targetDiv.appendChild(enterbutton);

    const deletebutton = document.createElement('button');
    deletebutton.innerText = 'Delete';
    deletebutton.onclick = showExeCount;
    targetDiv.appendChild(deletebutton);
    
    
}
showAlphabet();