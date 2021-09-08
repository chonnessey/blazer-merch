import React from 'react'
import NavBar from './NavBar'
import MerchControl from './MerchControl'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <MerchControl />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
