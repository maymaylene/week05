class Order{
    constructor(sandwich, salad, side, drink){
        this.sandwich = sandwich;
        this.salad = salad;
        this.side = side;
        this.drink = drink;
    }

    receipt(){
        console.log(`Your order: ${this.sandwich}, ${this.salad}, ${this.side}, ${this.drink}`);
    }
}

class Customer{
    constructor(name, orderNo, paymentMethod)
    {
        this.name = name;
        this.oderNo = orderNo;
        this.paymentMethod = paymentMethod;
    }

    thanks(){
        return `Thank you ${this.name}! your order is #: ${this.orderNo}, this order was paid with ${this.paymentMethod}`;
    }
}    


class Menu{
    constructor(){
        this.orders = [];
        this.selectedFood = null;
    }

    options(){
    let choice = this.menuOptions();
    while (choice != 0){
        switch (choice){
            case '1':
                this.createOrder();
                break;
            case '2':
                this.viewReceipt();
            case '3': 
                this.deleteOrder();
            case '4':
                this.displayOrders();
                break;
            default:
                selection = 0;
        }
        choice = this.menuOptions();
    }

        alert('Goodbye! :)')
    }

    menuOptions(){
        return prompt(`
        0- Exit
        1- Create New Order
        2- View Reciept
        3- Delete Order
        4- Display Current Order
        `);
    }

    displayOrders(){
        let foodString = '';
        for(let i = 0; i < this.orders.length; i++){
            foodString += i + ') ' + this.orders[i].sandwich.salad.side.drink + '\n';
        }
        alert(foodString);
    }

    createOrder(){
        let name = prompt('Enter your new order!');
        this.orders.push(new Order(sandwich, salad, side, drink));
    }

    viewReceipt(){
        let index = prompt('Enter the order index you wish to view');
        if (index > -1 && index < this.orders.length){
            this.selectedFood = this.orders[index];
            let description = 'Order: ' + this.selectedFood.name.oderNo.paymentMethod + '\n';
            
            for (let i = 0; i < this.selectedFood.name.oderNo.paymentMethod; i++){
                description += i + ') ' + this.selectedFood.name.orderNo.paymentMethod[i] + '\n';
            }

            let selection = this.menuOptions(description)
            switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.deleteOrder();
                    break;
            }
        }
    }
}