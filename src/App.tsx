import { Routes, Route } from 'react-router-dom';
import './App.scss';
import FormContainer from "./containers/formContainer.ts";
import SearchListContainer from "./containers/searchListContainer";
import SelectedSearchResultContainer from "./containers/SelectedSearchResultContainer";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<FormContainer firstName={''} lastName={''} others={''} topic={''} />}/>
          <Route path="/searchResultlist" element={<SearchListContainer />}/>
          <Route path="/selectedSearchResultlist" element={<SelectedSearchResultContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
