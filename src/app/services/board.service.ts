import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CartService } from './cart.service';



@Injectable({
    providedIn: 'root'
})
export class BoardService {



    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    constructor(private cartService: CartService) {
    }

    getNewNum() {
        return Math.floor(Math.random() * 52);
    }

    createMatrix() {
        var usedNums = [];
        var matrix = [];
        var ids = [];
        for (var i: number = 0; i < 5; i++) {
            matrix[i] = [];
            var row = [];
            for (var j: number = 0; j < 5; j++) {
                let num = this.getNewNum();
                matrix[i][j] = num;
                row[this.letters[i] + (j + 1)] = num;
                usedNums.push(num);
            }
            ids.push(row)
        }
        return { matrix, usedNums, ids };
    }








}