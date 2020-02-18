import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardId: string;
  numsArr;
  usedNums;
  objectKeys = Object.keys;
  tentaContainer;
  winner = false;

  constructor(private cartService: CartService, private boardService: BoardService) {
    this.numsArr = Array.from(Array(53).keys()).slice(1); //create helper function
    this.tentaContainer = boardService.createMatrix();
  }

  winners = [
    ['a1', 'a2', 'a3', 'a4', 'a5'],
    ['b1', 'b2', 'b3', 'b4', 'b5'],
    ['c1', 'c2', 'c3', 'c4', 'c5'],
    ['d1', 'd2', 'd3', 'd4', 'd5'],
    ['e1', 'e2', 'e3', 'e4', 'e5'],
    ['a1', 'b1', 'c1', 'd1', 'e1'],
    ['a2', 'b2', 'c2', 'd2', 'e2'],
    ['a3', 'b3', 'c3', 'd3', 'e3'],
    ['a4', 'b4', 'c4', 'd4', 'e4'],
    ['a5', 'b5', 'c5', 'd5', 'e5'],
    ['a1', 'b2', 'c3', 'd4', 'e5'],
    ['a5', 'b4', 'c3', 'd2', 'e1']
  ];

  selected = [];

  isCalled(number, id) {
    if (this.cartService.calledNumsArr.includes(number)) {
      this.selected.push(id);
      this.checkForBingo(id);
      return true;
    } else {
      return false;
    }
  }

  checkForBingo(id) {

    for (var i = 0; i < this.winners.length; i++) {
      var cellExists = 0;
      for (var j = 0; j < 5; j++) {
        if (this.selected.includes(this.winners[i][j])) {
          cellExists++;
        }
      }

      if (cellExists == 5) {
        this.cartService.endGame(this.cardId);
        this.winner = true;

      }
    }

  }

  ngOnInit() {
    this.cartService.currentNumber.subscribe(number => {
      this.checkForBingo(number);
    })
  }
}
