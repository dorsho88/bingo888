import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CartService {


    currentNumber: ReplaySubject<number> = new ReplaySubject<number>();
    numsArr;
    calledNumsArr = [];
    num;
    game = 'running';
    winner;

    constructor() {
    }

    startGame() {
        this.numsArr = Array.from(Array(53).keys()).slice(1); //create helper function
        const interval = setInterval(() => {
            if (this.game === 'over') {
                clearInterval(interval);
                console.log('winner is player: ' + this.winner)
            }
            if (this.calledNumsArr.length !== 51) {
                this.callNumber();
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    endGame(id) {
        this.game = 'over';
        this.winner = id;
    }

    callNumber() {

        // console.log('calloing number');
        if (this.calledNumsArr.length !== 52) {
            this.num = this.numsArr[Math.floor(Math.random() * this.numsArr.length)];
            if (this.num === -1) {
                this.callNumber();
            } else {
                this.calledNumsArr.push(this.num);
                this.currentNumber.next(this.num);
                this.numsArr[this.num] = -1;
                this.calledNumsArr = this.calledNumsArr.slice(); // find more elegant way of triggering changeDetection
                if (this.calledNumsArr.length === 51) {
                    console.log('game over');
                }
            }
        }
    }




}