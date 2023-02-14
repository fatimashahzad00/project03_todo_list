import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODOS",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more todo?",
            default: false,
        }
    ]);
    const { TODOS, addMore } = answers;
    console.log(answers);
    loop = addMore;
    if (TODOS) {
        todos.push(TODOS);
    }
    else {
        console.log("Kindly add valid input");
    }
}
// console.log(todos);
if (todos.length > 0) {
    console.log("YOur Todo List:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("NO todos found");
}
