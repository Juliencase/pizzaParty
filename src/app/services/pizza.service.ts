import {Injectable} from "@angular/core";


@Injectable()
export class PizzaService {
    getPizzas() {
        return Promise.resolve([
            { id: 1, name: 'Reine', price: 12, image : "assets/reine.jpg" },
            { id: 2, name: '4 fromages', price: 13, image : "assets/4fro.jpg" },
            { id: 3, name: 'Orientale', price: 11, image : "assets/orientale.jpg" },
            { id: 4, name: 'Cannibale', price: 9, image : "assets/cannibale.jpg" }
          ]);
    }
}