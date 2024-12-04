import React from 'react';
import { useParams } from 'react-router-dom';

const FormPreview = () => {
    const { id } = useParams();

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Form Preview - Question {id}</h1>
            {/* Render the form data */}
        </div>
    );
};

export default FormPreview;
