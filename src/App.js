import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormEditor from './components/formEditor';
import FormPreview from './components/formPreview';
import FillForm from './components/fillForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormEditor />} />
                <Route path="/preview/:id" element={<FormPreview />} />
                <Route path="/fill/:id" element={<FillForm />} />
            </Routes>
        </Router>
    );
};

export default App;
