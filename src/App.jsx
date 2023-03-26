import List from './components/List';
import TypeMe from './components/Typeme';
import MyForm from './components/MyForm';
import './App.css'

// const User1 = {name:"John Doe" , job:"Engineer" , hobby:"Listen to music"};
// const User2 = {name:"John Smith" , job:"Engineer" , hobby:"Listen to music"};
// const User3 = {name:"John Smooth" , job:"Engineer" , hobby:"Listen to music"};

// const Users = [User1 , User2 , User3];

function App() {
  return(
    <div className='App'>
      {/* <List users={Users}/> */}
      {/* <TypeMe /> */}
      <MyForm />
    </div>
  )
  
}

export default App
