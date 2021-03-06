console.log("app.js is running");

//JSX -Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

// function showOptions(options) {
//     if(options) {
//         return <ol><li>{options[0]}</li><li>{options[1]}</li></ol>
//     }
// }

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};


const removeOptions = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            {app.options && (app.options.length>0 ? <p>Here are your options: </p> : <p>No Options </p>)}
            <button disabled={app.options.length ===0 } onClick={onMakeDecision}>What should i do? </button>
            <button onClick={removeOptions}>Remove All</button>
            <p>{app.options.length}</p>
            <ol>
            { 
                app.options.map((option) => <li key="{option}">{option}</li>)
            }
            </ol>
    
            <form onSubmit={onFormSubmit}> 
            <input type="text" name="option" />
            <button>Add Option</button>
            </form>
           
        </div>
    );


    ReactDOM.render(template, appRoot);

}

render();

