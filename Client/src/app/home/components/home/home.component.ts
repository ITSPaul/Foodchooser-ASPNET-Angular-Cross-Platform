import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../../core/services/authentication.service';
import { FoodDataService } from './../../../core/services/food-data.service';
import { FoodItem } from './../../../shared/models/foodItem';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    randomFood: FoodItem;
    errorMessage: string;

    constructor(
        private foodDataService: FoodDataService,
        public authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.getRandomFood();
    }

    getRandomFood() {
        this.foodDataService
            .getRandomFood()
            .subscribe((response: FoodItem) => {
                this.randomFood = response;
            }, (error: any) => {
                if (error.status === 400) {
                    this.errorMessage = 'No food found :-(';
                } else {
                    this.errorMessage = 'There was an error';
                }
            });
    }

    getRecipesWithGoogle(): void {
        window.open('https://www.google.de/search?q=' + this.randomFood.itemName, '_blank');
    }

    getRecipesWithBing(): void {
        window.open('https://www.bing.com/search?q=' + this.randomFood.itemName, '_blank');
    }
}