import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  numsArr;
  calledNumsArr = [];
  num;

  constructor(private cartService: CartService) {
    this.numsArr = Array.from(Array(53).keys()).slice(1); //create helper function
  }

  ngOnInit() {
    this.cartService.startGame();
    this.cartService.currentNumber.subscribe(number => {
      this.calledNumsArr.push(number);
      this.calledNumsArr = this.calledNumsArr.slice(); // find more elegant way of triggering changeDetection
    })

  }

}
