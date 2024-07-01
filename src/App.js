
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Main from './Components/Main';
import View from './Components/View';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import Add from './Components/Add'



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>

          <Routes>

             <Route path='' element={<Login/>}/>
             <Route path='register' element={<Register/>}/>
             <Route path='main/:id' element={<Main/>}/>
             <Route path='main/:id/view' element={<View/>} />
             <Route path='main/:id/view/add' element={<Add/>} />
             <Route path='*' element={<PageNotFound/>}/>

          </Routes>
          
          <Footer/>

      </header>
    </div>
  );
}

export default App;
