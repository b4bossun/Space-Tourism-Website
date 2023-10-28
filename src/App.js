
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppSpaceHome from './component 1/AppSpaceHome';
import AppSpaceCrew from './component 1/AppSpaceCrew';
import AppSpaceDestination from './component 1/AppSpaceDestination';
import AppSpaceTechnology from './component 1/AppSpaceTechnology';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AppSpaceHome />}></Route>
          <Route path='/appspacedestination' element={<AppSpaceDestination />}></Route>
          <Route path='/appspacecrew' element={<AppSpaceCrew />}></Route>
          <Route path='/appspacetechnology' element={<AppSpaceTechnology />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
