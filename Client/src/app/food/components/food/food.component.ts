import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { FoodListDataService } from '../../../core/services/foodList-data.service';
import { FoodList } from '../../../shared/models/foodList';

@Component({
    selector: 'food-component',
    templateUrl: './food.component.html'
})

export class FoodComponent implements OnInit {

    lists: FoodList[] = [];

    constructor(private foodListDataService: FoodListDataService) { }

    addFood(foodListname: string) {
        this.foodListDataService
            .addList(foodListname)
            .pipe(map((response: any) => response.value))
            .subscribe((addedList: FoodList) => {
                this.lists.push(addedList);
            });
    }

    ngOnInit(): void {
        this.foodListDataService
            .getAllLists()
            .pipe(map((response: any) => response.value))
            .subscribe((lists: FoodList[]) => {
                this.lists = lists;
            });
    }
}
