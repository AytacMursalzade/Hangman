const wordsection = document.querySelector (".word")
const boardsection = document.querySelector (".board")
const figure = document.querySelector (".figure")
const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const human = [
    "head", "body" , "rightarm" , "Leftarm", "rightLeg", "leftLeg"
];

let randomword = "";

const createkeyboard = () => {
    boardsection.innerHTML = "";
    for (let a =0; a < letters.length; a++){
        let square = document.createElement ("div");
        square.classList.add("lettersquare");
        square.textContent = letters[a];
        boardsection.appendChild(square);
    }
};

const createWord = () => {
    wordsection.innerHTML = "";
    randomword = selectWord();
    for(let a = 0; a < 8; a++ ){
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("data-value" , randomword[a]);
        wordsection.appendChild(square);
    }
};

const selectWord = () =>{ 
    const word = [
    "CHERRIES",
    "GRAPE",
    "BLACKBERRY",
    "BANANA",
    "PINEAPPLE",
    "STAWBERRY",
    "PEACH",
    "LEMON",
    "LIME",
    "AVOCADO",
    "APRICOT"
];
    const randomWord = Math.floor(Math.random() * word.length);
    console.log(word[randomWord]);
    return (keyWord = Array.from(word[randomWord])); 
};

const generatebody = (value) => {
    let bodypart = document.createElement("div");
    bodypart.classList.add(human[value]);
    figure.appendChild(bodypart);
};



const startgame = () => {
    createkeyboard();
    createWord();

    let buttons = document.querySelectorAll(".lettersquare")
    let squares = document.querySelectorAll(".square")
    // let figuresection = document.querySelectorAll(".figure div")

    let wrongcount = 0
    let correctcount = 0
    // figuresection.forEach(item =>{
    //     if (item.getAttribute("data-value")) item.remove()

        
    // })

buttons.forEach(item => {
    item.addEventListener("click", (e) => {
        let chosenletter = e.target.textContent
        if (randomword.includes(chosenletter)){
            e.target.classList.add("correct")
            squares.forEach(item => {
                if (item.getAttribute("data-value") === chosenletter){
                    item.textContent = item.getAttribute("data-value");
                    item.classList.add("show");
                    correctcount++
                }
            })
            if (correctcount === 8){
                buttons.forEach(item => {
                    item.style.background = "yellow"
                })
                setTimeout(() =>{
                    startgame()
                }, 1000)
            }
        }
        else{
            e.target.classList.add("wrong")
            wrongcount++
            generatebody(wrongcount-1)
            if(wrongcount === 6){
                buttons.forEach(item => {
                    item.classList.add("close")
                  
                })
                squares.forEach(item=> {
                    item.classList.add("show")
                    item.style.background = "#D5B4B4"

                    setTimeout(() => {
                        startgame();
                    }, 2000); 
                });
                
            }
        }
    });
});    
};

startgame();

