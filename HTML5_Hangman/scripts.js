
var Scripts = (function () {
    'use strict';

    function Hangman(game) {
        this.game       = game;
    }

    Hangman.prototype.begins = function () {
        this.gameover = false;
        document.getElementById('progress').value='0';
        this.countWrong = 0;
        this.wordSize=0;
        this.letterGuessed = [];
        var category = document.getElementById("category").value;
        var wordLength = document.getElementById("wordLength").value;
        if (category === "food" || category === "FOOD")
            {
            if (wordLength === "3") {
                this.words = ['PIE', 'NUT'];
                this.wordSize=3;
            }
            else if (wordLength === "4")
            {
                this.wordSize=4;
                this.words = ['KIWI', 'CAKE'];
            }
            else if (wordLength === "5")
            {
                this.wordSize=5;
                this.words = ['BACON', 'LEMON'];
            }
            else if (wordLength === "6")
            {
                this.wordSize=6;
                this.words = ['BANANA', 'ORANGE'];
            }
            else if (wordLength === "7")
            {
                this.wordSize=7;
                this.words = ['COCONUT', 'AVOCADO'];
            }
            else{
                this.wordSize=5;
                this.words = ['PIE', 'NUT', 'KIWI', 'CAKE', 'BACON', 'LEMON', 'BANANA', 'ORANGE', 'COCONUT', 'AVOCADO'];}
        } else if (category === "drink" || category === "DRINK") {
            if (wordLength === "3")
            {
                this.wordSize=3;
                this.words = ['TEA', 'RUM'];
            }
            else if (wordLength === "4")
            {
                this.wordSize=4;
                this.words = ['COKE', 'WINE'];
            }
            else if (wordLength === "5")
            {
                this.wordSize=5;
                this.words = ['VODKA', 'JUICE'];
            }
            else if (wordLength === "6")
            {
                this.wordSize=6;
                this.words = ['COFFEE', 'SPIRIT'];
            }
            else if (wordLength === "7")
            {
                this.wordSize=7;
                this.words = ['WHISKEY', 'YOGHURT'];
            }
            else
            {
                this.wordSize=5;
                this.words = ['TEA', 'RUM', 'COKE', 'WINE', 'VODKA', 'JUICE', 'COFFEE', 'SPIRIT', 'WHISKEY', 'YOGHURT'];
            }
        } else {
            if (wordLength === "3")
            {
                this.wordSize=3;
                this.words = ['TEA', 'RUM', 'PIE', 'NUT'];
            }
            else if (wordLength === "4")
            {
                this.wordSize=4;
                this.words = ['COKE', 'WINE', 'KIWI', 'CAKE'];
            }
            else if (wordLength === "5")
            {
                this.wordSize=5;
                this.words = ['VODKA', 'JUICE', 'BACON', 'LEMON'];
            }
            else if (wordLength === "6")
            {
                this.wordSize=6;
                this.words = ['COFFEE', 'SPIRIT', 'BANANA', 'ORANGE']
            }
            else if (wordLength === "7")
            {
                this.wordSize=7;
                this.words = ['WHISKEY', 'YOGHURT', 'COCONUT', 'AVOCADO'];
            }
            else
                {
                    this.wordSize=5;
                    this.words = ['PIE', 'NUT', 'KIWI', 'CAKE', 'BACON', 'LEMON', 'BANANA', 'ORANGE', 'COCONUT', 'AVOCADO',
                    'TEA', 'RUM', 'COKE', 'WINE', 'VODKA', 'JUICE', 'COFFEE', 'SPIRIT', 'WHISKEY', 'YOGHURT'];
            }
        }
        this.answer = this.words[Math.floor(Math.random() * this.words.length)];
        this.hideElement('hide');
        this.showElement(this.game + "_guessbox", null);
        this.showElement(this.game + "_word", this.getWord());
    };

    Hangman.prototype.guess = function (letter) {
        letter = letter.charAt(0).toUpperCase();

        if (this.gameover || this.letterGuessed.indexOf(letter) > -1) {
            return;
        }


        this.letterGuessed.push(letter);
        this.showElement(this.game + "_word", this.getWord());
        this.showElement(this.game + "_guesses", this.letterGuessed.join(''));

        if (this.answer.indexOf(letter) < 0) {
            this.countWrong++;
            this.showElement(this.game + "_" + this.countWrong, null);
            if (this.countWrong === 5) {
                this.showElement(this.game + "_end", "THE WORD IS: **"+this.answer+"** YOU LOSE!!<br/>");
                document.getElementById('progress').value='0';
                this.gameover = true;
            }
        }
        else if (this.answer.indexOf(this.getWord()) !== -1) {
            this.showElement(this.game + "_end", "THE WORD IS: **" + this.answer +"** YOU WIN!!<br/>");
            document.getElementById('progress').value='100';
            this.gameover= true;
        }
        else
        {
            document.getElementById('progress').value+=(100/this.wordSize);
        }
    };


    Hangman.prototype.showElement = function (game, content) {
        if (content !== null) {
            document.getElementById(game).innerHTML = content;
        }
        document.getElementById(game).style.opacity = 1;
    };


    Hangman.prototype.hideElement = function (elClass) {
        var elements = document.getElementsByClassName(elClass), i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0;
        }
    };


    Hangman.prototype.getWord = function () {
        var result = "", i;
        for (i = 0; i < this.answer.length; i++) {
            result += (this.letterGuessed.indexOf(this.answer[i]) > -1) ?
                    this.answer[i] : "_";
        }
        return result;
    };


    return new Hangman('game');
}());