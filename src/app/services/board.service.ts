import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CartService } from './cart.service';



@Injectable({
    providedIn: 'root'
})
export class BoardService {



    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    numbersArr = Array.from(Array(53).keys()).slice(1);
    constructor() { }

    getNewNum() {
        return this.numbersArr[Math.floor(Math.random() * this.numbersArr.length)];
    }

    createMatrix() {
        var usedNums = [];
        var matrix = [];
        var ids = [];
        for (var i: number = 0; i < 5; i++) {
            matrix[i] = [];
            var row = [];
            for (var j: number = 0; j < 5; j++) {
                let num = this.callNumber(usedNums);
                matrix[i][j] = num;
                // usedNums.push(num);
                row[this.letters[i] + (j + 1)] = num;
            }

            ids.push(row)
        }
        return { matrix, usedNums, ids };
    }

    callNumber(usedNums) {

        let num = this.getNewNum();
        console.log(usedNums)
        if (usedNums.includes(num)) {
            return this.callNumber(usedNums)

        } else {
            usedNums.push(num);
            return num;
        }
    }










}