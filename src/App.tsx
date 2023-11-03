import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import FormContainer from "./containers/formContainer";
import SearchListContainer from "./containers/searchListContainer";
import SelectedSearchResultContainer from "./containers/SelectedSearchResultContainer";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<FormContainer firstName={''} lastName={''} others={''} topic={''} />}/>
          <Route path="/searchResultlist" element={<SearchListContainer id={0} urls={{
          small: ''
        }} />}/>
          <Route path="/selectedSearchResultlist" element={<SelectedSearchResultContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
