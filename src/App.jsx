import * as React from 'react';
import './App.css'; //el . antes de el slash es la raiz del proyecto
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import './index.css'
function App (){
  return(
        <div>
          <Footer/>
          <Header/>
          <Employees/>
        </div>
  );
}
export default App;
