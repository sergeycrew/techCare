import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import { WelcomePage } from './pages/WeclomePage';
import { Overview } from './pages/Overview';
import { Patients } from './pages/Patients';
import { Shedule } from './pages/Shedule';
import { Message } from './pages/Message';
import { Transactions } from './pages/Transactions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/shedule" element={<Shedule />} />
        <Route path="/message" element={<Message />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default App;
