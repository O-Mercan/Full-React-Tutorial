import './App.css';

function App() {
  const title =  'Welcome to the new blog'
  const likes = 50;
  //const person = {name: 'mario', age: 25};
  const link = 'http://google.com';

  return (
    <div className="App">
      <div className="content"></div>
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      {/* <p>{person}</p> */}
      <p>{10}</p>
      <p>{'hello, ninjas'}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}>Google Site</a>
    </div>
  );
}

export default App;
