import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FillForm = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const saveQuestion = async () => {
        try {
            const questionData = {
                type: 'Categorize', // Replace with dynamic type if required
                content,
                image: '', // Add logic to upload/select image if needed
               
            };

            const response = await axios.post('http://localhost:5000/api/responses', questionData);
            setMessage(response.data.message);
            
        } catch (error) {
            console.error('Error saving question:', error);
            setMessage('Failed to save question');
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Fill Form - Question {id}</h1>
            <input
                type="text"
                placeholder="Enter question content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={saveQuestion}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
                Save Question
            </button>
            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
};

export default FillForm;
