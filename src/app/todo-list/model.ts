
export class TodoItem {
    action: string;
    done: boolean;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}

export class Model {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = 'Adam';
        this.items = [
            new TodoItem('Buy Flowers', false),
            new TodoItem('Get Shoes', false),
            new TodoItem('collect Tickets', false),
            new TodoItem('Call Joe', false)
        ];
    }
}
