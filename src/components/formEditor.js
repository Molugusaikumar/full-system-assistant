import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormEditor = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: '', headerImage: '', questions: [] });

    const addQuestion = (type) => {
        const updatedForm = {
            ...form,
            questions: [...form.questions, { type, content: '', image: '' }],
        };
        setForm(updatedForm);

        // Navigate to a preview page with the current question index
        navigate(`/fill/${updatedForm.questions.length}`);
    };

    const saveForm = async () => {
        try {
            // Mock API call (replace with actual API endpoint)
            console.log('Form Data:', form);
            alert('Form saved successfully!');
        } catch (err) {
            console.error('Error saving form:', err);
            alert('Failed to save the form.');
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Form Editor</h1>
            <input
                type="text"
                placeholder="Enter Form Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />

            <div className="mb-4">
                <button
                    onClick={() => addQuestion('Categorize')}
                    className="mr-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Add Categorize
                </button>
                <button
                    onClick={() => addQuestion('Cloze')}
                    className="mr-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                >
                    Add Cloze
                </button>
                <button
                    onClick={() => addQuestion('Comprehension')}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Comprehension
                </button>
            </div>

            <button
                onClick={saveForm}
                className="w-full bg-blue-700 text-white py-3 px-4 rounded hover:bg-blue-800"
            >
                Save Form
            </button>
        </div>
    );
};

export default FormEditor;
