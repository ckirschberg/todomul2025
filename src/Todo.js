export default class Todo {
    constructor(id, title, completed, dueDatetime) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.dueDatetime = dueDatetime;
    }
}

// Her opretter vi et js objekt med en klasse og dens konstruktør
//const todo3 = new Todo(1, 'Gå på arbejde', false, new Date(2026,0,1,12,20));


// Her opretter vi js objekter 'manuelt' / uden en klasse.
//const todo1 = { text: 'Køb ind', completed: false };
//const todo2 = { text: 'Lufte hunden', completed: false };
