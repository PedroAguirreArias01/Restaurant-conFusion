import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  leader: Leader;

  errMess: any;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('baseURL') private baseURL
    ) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => {
      this.dish = dish},errmess => this.errMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion=>{
      this.promotion= promotion
    },  errmess => this.errMess = <any>errmess);
    this.leaderService.getFeaturedLeader().subscribe(leader => {
      this.leader = leader}, errmess => this.errMess = <any>errmess);
  }

}
