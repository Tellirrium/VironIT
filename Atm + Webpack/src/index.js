import App from './modules/App';


let app = new App;
app.addAtm();
app.addAtm();
app.start(app);
app.display();

const add = document.getElementsByClassName('addAtm')[0];

add.addEventListener( 'click', () => app.addAtm() );
