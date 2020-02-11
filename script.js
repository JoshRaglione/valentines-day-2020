let btn = document.querySelector(".btn");
let random = Math.floor(Math.random() * 12) + 1;
let theFullDay = 22;
let winner = document.querySelector(".winner");


//initial click
btn.addEventListener("click", function () {
    start = prompt(`I SeE YoUr Up, WhAt TiMe DiD YoU WaKe Up???🌞`);
    theClock = Number(start);
    if (theClock >= 10) {
        ten();
    }
    else if (theClock >= 8 && theClock < 10) {
        eight();
    }
    else if (theClock >= 6 && theClock < 8) {
        six();
    }
    else {
        funnyNothings(random, "You gonna have to give me a number baby😙");
    }
})
//initial click

//-------------------------------------------------------------------------------------------------------------
//WAKE UP TIMES
function ten(theClock) {

    let ten_prompt = prompt("Were both awake, we found an awesome place that we can have breakfast at called Vegan Pancake house 🤤 but it's also a super nice day to go climbing! What do you do?");

    if (ten_prompt == null) {
        funnyNothings(random, "nothing!");
        return;
    };

    trackingAnswers(`You woke up at ${theClock} and ${ten_prompt}`);

    let tenArr = ten_prompt.toLowerCase().split(' ');

    for (let i = 0; i < tenArr.length; i++) {
        if (tenArr[i].includes("rock") || tenArr[i].includes("climbing") || tenArr[i].includes("climb") || tenArr[i].includes("go") || tenArr[i].includes("boulder")) {
            return funnyNothings(random, "Awwww you to sweet😊 but it took all day to do😢");//ends
        }
        else if (tenArr[i].includes("vegan") || tenArr[i].includes("pancake") || tenArr[i].includes("house")) {
            return ten_continues_1(tenArr[i]);//continues
        }
    }
    funnyNothings(random, "i dont recognize what you saying..🥺");
}


function eight(theClock) {

    trackingAnswers("Someone got some good sleep😃");

    let eight_prompt = prompt(`I'm Dead asleep😴 and you are basically shaking from this fart you have brewin inside of you from those Chips! do you let it out silently Knowing it will be so stunky that I wake up in a gag holding my own breathe like I'm in a gas chamber or do you let out a boisterous, record breaking fart that shakes the whole house and makes me wake in a panic? What do you do😵`);

    if (eight_prompt == null) {
        funnyNothings(random, "nothing!");
        return;
    };

    trackingAnswers(`You woke up at ${theClock} and ${eight_prompt}`);

    let eightArr = eight_prompt.toLowerCase().split(' ');

    for (let i = 0; i < eightArr.length; i++) {
        if (eightArr[i].includes("silent") || eightArr[i].includes("stinky") || eightArr[i].includes("silently") || eightArr[i].includes("stunky") || eightArr[i].includes("deadly")) {
            return eight_continues_1(eightArr[i]);//continues
        }
        else if (eightArr[i].includes("loud") || eightArr[i].includes("boisterous") || eightArr[i].includes("monsterious") || eightArr[i].includes("record") || tenArr[i].includes("shatterung")) {
            return funnyNothings(random, "You decided to fart so loud that I had a heart attack and died😮");//ends
        }
    }
    funnyNothings(random, "Say something else, I didnt recognize what your saying..🥺");
}


function six(theClock) {

    let six_prompt = prompt("Got up extra early! 😁 and I am sound asleep. Do you surprise me with tofu eggs and tofurky sausage that obviously has a bite taken out of or do you surprise me with double deluxe waffles? ");

    if (six_prompt == null) {
        funnyNothings(random, "nothing!");
        return;
    };

    trackingAnswers(`You woke up at ${theClock} and ${six_prompt}`);

    let sixArr = six_prompt.toLowerCase().split(' ');

    for (let i = 0; i < sixArr.length; i++) {
        if (sixArr[i].includes("waffle") || sixArr[i].includes("waffles") || sixArr[i].includes("double") || sixArr[i].includes("deluxe")) {
            return funnyNothings(random, "oh how could you its valentines day! cant be having a poopy butthole!");//ends
        }
        else if (sixArr[i].includes("eggs") || sixArr[i].includes("tofu") || sixArr[i].includes("sausage") || sixArr[i].includes("sausages")) {
            return six_continues_1(sixArr[i]);//continues
        }
    }
    funnyNothings(random, "i dont recognize what you saying..🥺");
}
//WAKE UP TIMES
//-------------------------------------------------------------------------------------------------------------


//10 O CLOCK 
function ten_continues_1(string_prompt) {
    theClock += 3.5;

    trackingAnswers(`Man that was bomb!🥳 we are so full from ${string_prompt}`)

    let ten_continues_1_prompt = prompt("That breakfast was soooo good! We decided either we should go to a Movie or an Art Class. What do you do?");
    //------------------------------------
    if (ten_continues_1_prompt == null) {
        funnyNothings(random, "nothing!");//ERROR CATCHING
        return;
    };
    //------------------------------------

    trackingAnswers(`It's ${theClock} and we decided to go to a ${ten_continues_1_prompt}`);

    let tenArr = ten_continues_1_prompt.toLowerCase().split(' ');

    for (let i = 0; i < tenArr.length; i++) {
        if (tenArr[i].includes("movie") || tenArr[i].includes("theater") || tenArr[i].includes("movies")) {
            return ten_continues_3(tenArr[i]);//continues
        }
        else if (tenArr[i].includes("art") || tenArr[i].includes("class")) {
            return funnyNothings(random, "I was so full that I barfed all over the artwork and runined the whole day😫");//ends
        }
    }
}
function ten_continues_2(string_prompt) {
    theClock += 3.5;

    trackingAnswers(`That ${string_prompt} was so good`)

    let ten_continues_2_prompt = prompt("Were back home from the movies, and we're feeling especially dirty😏 do we get down and dirty?");
    //------------------------------------
    if (ten_continues_2_prompt == null) {
        funnyNothings(random, "nothing!");//ERROR CATCHING
        return;
    };
    //------------------------------------

    let tenArr = ten_continues_2_prompt.toLowerCase().split(' ');

    for (let i = 0; i < tenArr.length; i++) {
        if (tenArr[i].includes("dirty") || tenArr[i].includes("yes") || tenArr[i].includes("yessss") || tenArr[i].includes("down")) {
            return ten_continues_3(tenArr[i]);//continues
        }
        else if (tenArr[i].includes("no") || tenArr[i].includes("nope")) {
            return funnyNothings(random, "My penis explodes and i die😩");//ends
        }
    }
}
function ten_continues_3() {
    theClock += 3.5;

    trackingAnswers(`Its ${theClock} o clock and we getting down and dirtayyy!`);

    alert("Now press the button and say: Im so fucking horny that i want to squeeze joshs nuts.😏");
    document.querySelector("#btnGiveCommand").style.visibility = 'visible';
    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;

        if (command.toLowerCase() === 'Im so fucking horny that i want to squeeze joshs nuts') {
            winner.innerHTML = `My Tooty Patootie, Only you. Only you make me feel the way I do, I can only see through with the only person I take too, which is you. We have times that are rough, ya thats true but I wouldn't want to spend a moment with someone other than you. I LOVE YOU and that is the biggest truth❤️ Happy Valentines day!`
        }
        else {
            trackingAnswers(command);
        }
    }
    }
//10 O CLOCK
//-------------------------------------------------------------------------------------------------------------
/*8 O CLOCK */
function eight_continues_1(string_prompt) {
    theClock += 3;

    trackingAnswers(`You laugh at my gaging, choking and crying at your ${string_prompt} fart!`);

    let eight_continues_1_prompt = prompt("After that terrible stinky you felt like that may have been a bit harsh so you told me where do I want to go for lunch Chang's or Doe's?");
    //------------------------------------
    if (eight_continues_1_prompt == null) {
        funnyNothings(random, "nothing!");//ERROR CATCHING
        return;
    };
    //------------------------------------

    trackingAnswers(`We end up going to ${eight_continues_1_prompt} at ${theClock}`);

    let eightArr = eight_continues_1_prompt.toLowerCase().split(' ');

    for (let i = 0; i < eightArr.length; i++) {
        if (eightArr[i].includes("chang's") || eightArr[i].includes("changs") || eightArr[i].includes("mongolian")) {
            return eight_continues_2(eightArr[i]);//continues
        }
        else if (eightArr[i].includes("doe's") || eightArr[i].includes("does") || eightArr[i].includes("doughnuts") || eightArr[i].includes("donuts")) {
            return funnyNothings(random, "But I want to go to Chang's😫");//ends
        }
    }
}

function eight_continues_2(string_prompt) {
    theClock += 3;

    trackingAnswers(`MMMMMMMM Tasty!😋 we are so full from ${string_prompt}`)

    let eight_continues_2_prompt = prompt(`That was some good food, a good night out, and we are back home from all of it, your looking especially sexy and I cant seem to keep my hands off of you🥰😘😍 do we end up getting dirty or nah?`);
    //------------------------------------
    if (eight_continues_2_prompt == null) {
        funnyNothings(random, "nothing!");//ERROR CATCHING
        return;
    };
    //------------------------------------

    let eightArr = eight_continues_2_prompt.toLowerCase().split(' ');

    for (let i = 0; i < eightArr.length; i++) {
        if (eightArr[i].includes("dirty") || eightArr[i].includes("yes") || eightArr[i].includes("sex") || eightArr[i].includes("naughty") || eightArr[i].includes("ya")) {
            return eight_continues_3(eightArr[i]);//continues
        }
        else if (eightArr[i].includes("no") || eightArr[i].includes("nope") || eightArr[i].includes("not") || eightArr[i].includes("nah")) {
            return funnyNothings(random, "It's because I'm disgusting 😩");//ends
        }
    }
}

function eight_continues_3() {
    theClock += 6;

    trackingAnswers(`Its ${theClock} o clock and we getting down and dirtayyy!`);

    alert("Now press the button and say: JOSHY DADDY FUCK ME❤️");

    document.querySelector("#btnGiveCommand").style.visibility = 'visible';
    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;
        console.log(command);


        if (command.toLowerCase().includes("joshi")) {
            winner.innerHTML = `Dear Baby Cakes, 
            I cant even begin to fathom how much you have meant to me all these years. Through the ups and downs, I love you more and more each day. A day without you is like a day with nothing, a day with total emptiness, a gap within me that only someone as special as you could fill, there is only one person that has helped the way you have with everything that makes me, me and that is you. Hppy Valentines Day! I LOVE YOU so much! p.s. i tried to run an infinite loop on the "i love you" but the computer just crashed 😄 }`
        }
        else {
            trackingAnswers(command);
        }
    }
    }
/*8 O CLOCK */
//-------------------------------------------------------------------------------------------------------------
//6 O CLOCK
function six_continues_1(string_prompt) {
    theClock += 4;

    trackingAnswers(`mmmmm that shit was so goooooood! that ${string_prompt} was amazing!`)

    alert("I gasp at the fact that you have taken a bite out of my sausage 😮 but it was so GOOD! But you need to apologize by clicking the button and saying 'Sorry Mr. Josh for taking a bite out of your sausage' and dont say 'no'")

    document.querySelector("#btnGiveCommand").style.visibility = 'visible';
    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;
        console.log(command);


        if (command.toLowerCase().includes("no")) {
            document.querySelector("#btnGiveCommand").style.visibility = 'hidden';
            six_continues_2();
        }
        else {
            funnyNothings(random, "Got to stick up for yourself babe that breakfast was bomb!");
        }
    }
}
function six_continues_2() {
    theClock += 4;

    trackingAnswers("You didnt say your sorry for making me a bomb ass breakfast😁")

    alert("you didnt say your sorry😁 but now you have to! say! 'I didnt make it with care!' and dont say 'no' this time it wont work MUHAHAHAHAHAHHA😈 ")

    document.querySelector("#btnGiveCommand").style.visibility = 'visible';
    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;
        console.log(command);

    if (command.toLowerCase().includes("no")) {
        document.querySelector("#btnGiveCommand").style.visibility = 'hidden';
        six_continues_3();
    }
    else {
        funnyNothings(random, "The only way it can taste that good is to make it with care☺️");
    }
}
}
function six_continues_3() {
    theClock += 4;

    trackingAnswers("I know you made it with care it was to good🥰");

    alert("Do you love me more or most?❤️");

    function love() {
        while(true) {
            "I love you";
        }
    }
    document.querySelector("#btnGiveCommand").style.visibility = 'visible';
    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;
        if (command.toLowerCase().includes("more") || command.toLowerCase().includes("most")) {
            document.querySelector("#btnGiveCommand").style.visibility = 'hidden';
            winner.innerHTML = `Dear Sweet Heart, 
            There is only one person in the world who'd put up with this text/ talk adventure and that is you! because you have the biggest heart out of anyone i have ever knew, your like a song that never gets old something that i will always love to repeat and that always brings a smile to my face😊 I love you so much and more! Happy Valentines Day❤️ }`
        }
    }
}
//6 O CLOCK
//-------------------------------------------------------------------------------------------------------------

//goes to answers list
function trackingAnswers(answers) {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.innerHTML = answers;
    ul.appendChild(li);
}
//goes to answers list

//funny randoms
function funnyNothings(random, funny) {

    if (random >= 1 && random <= 2) {
        document.getElementById("shrek").style.display = "block";
        trackingAnswers(funny);
    }
    else if (random >= 3 && random <= 4) {
        document.getElementById("sponge").style.display = "block";
        trackingAnswers(funny);
    }
    else if (random >= 5 && random <= 6) {
        document.getElementById("squidward").style.display = "block";
        trackingAnswers(funny);
    }
    else if (random >= 7 && random <= 8) {
        document.getElementById("patrick").style.display = "block";
        trackingAnswers(funny);
    }
    else if (random >= 9 && random <= 10) {
        document.getElementById("squidward2").style.display = "block";
        trackingAnswers(funny);
    }
    else if (random >= 11 && random <= 12) {
        document.getElementById("squidward3").style.display = "block";
        trackingAnswers(funny);
    }
    else {
        console.log("how!");
    }
}
//funny randoms

//Speech recognition
var message = document.querySelector('#message');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onspeechend = function () {
    recognition.stop();
};

recognition.onerror = function (event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}

document.querySelector('#btnGiveCommand').addEventListener('click', function () {
    recognition.start();

});

    //speech recognition