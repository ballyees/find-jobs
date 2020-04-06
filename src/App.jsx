import React from 'react';
import './App.css';
// import component
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom'

const Main = () => (
  <div>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1>-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias, cum adipisci maiores perferendis dignissimos atque. Doloremque delectus quibusdam, deserunt quasi voluptatum quia magni, voluptatem provident sequi qui labore commodi.</h1>
    <h1 id="menu">-------------------------------------------------------------------------------------------</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto sit reprehenderit quibusdam doloremque vitae modi ad earum atque libero, fugit sequi explicabo iure quia. Odio, assumenda delectus. Nemo, laboriosam?</h2>

  </div>
)

export default class App extends React.Component{
  state = {

  }

  render(){
    console.log(this.props)
    return (
      <Router>
          <div className="App">
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          </div>
      </Router>
    );
  }
}
  
