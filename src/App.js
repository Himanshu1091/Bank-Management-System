import './App.css';
import React from 'react';
import NaviBar from './Component/Navig';
import CarouselBank from './Component/Home/HomeBank';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; //Use Switch & HashRouter if needed..
import ProjectFooter from './Component/ProjectFooter';
import FDCaculatorPage from './Component/FDCaculatorPage';

// here is new files

// import { BrowserRouter, Route, Routes, Redirect,  } from 'react-router-dom';
import Personal from './Component/Personal';
import NRI from './Component/NRI';
import Business from './Component/Business';
import HistoryPage from './Component/OurHistory';
import LoanPage from './Component/Loan';
import FAQPage from './Component/FAQ';
import Leader from './Component/Leader';
import InvestmentPage from './Component/Invest';
import InsurancePage from './Component/Insurance';
import PaymentsPage from './Component/Payment';
import SavingsAc from './Component/Saving';
import CurrentAccountPage from './Component/Current';
import KnowledgeHubPage from './Component/Knowledge';
import Login from './Component/Login';
import Form1 from './Component/Form';
import Explor from './Component/Explor';
import Ccard from './Component/AllCards';
import DepCalculator from './Component/Depo';



// here above section takes by pjfiles

function App() {
  return (
    <div className="App">

      {/* here again new files */}
      

      <BrowserRouter>
      {/* <HashRouter></HashRouter> */}
      {/* <Switch> */}
      <NaviBar></NaviBar>
     <Routes>
      

      <Route path="/" element={<CarouselBank></CarouselBank>}/> 

      <Route path="/Personal" element={<Personal/>}></Route>
      <Route path="/NRI" element={<NRI></NRI>}></Route>
      <Route path="/Business" element={<Business/>}></Route>
      <Route path="/OurHistory" element={<HistoryPage/>}></Route>
      <Route path="/Loan" element={<LoanPage/>}></Route>
      <Route path='/Invest' element={<InvestmentPage/>}></Route>
      <Route path='/Insurance' element={<InsurancePage/>}></Route>
      <Route path='/Payments' element={<PaymentsPage/>}></Route>
      <Route path='/Saving' element={<SavingsAc/>}></Route>
      <Route path='/Current' element={<CurrentAccountPage/>}></Route>
      <Route path='/Knowledge' element={<KnowledgeHubPage/>}></Route>
      <Route path='/Leader' element={<Leader/>}></Route>
      <Route path='/FAQ' element={<FAQPage/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path="/fd-calculator" element={<FDCaculatorPage />}/>
      <Route path='/form1' element={<Form1/>}></Route>
      <Route path='/explor' element={<Explor/>}/>
      <Route path='/allcard' element={<Ccard/>}/>
      <Route path='/Depo' element={<DepCalculator/>}/>
      
      
     </Routes>
     <ProjectFooter></ProjectFooter>
     {/* </Switch> */}
     </BrowserRouter>

      {/* the above section is routing */}
  
    </div>
  );
}

export default App;
