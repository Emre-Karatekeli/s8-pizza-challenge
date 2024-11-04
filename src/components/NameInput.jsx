import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default function NameInput({ onValidationChange }) {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setName(value);

        if (value.length < 3) {
            setError('En az 3 karakter girmelisiniz.');
            onValidationChange(false); // [Yeni Satır] - Geçersizse, callback ile false gönder
        } else {
            setError('');
            onValidationChange(true); // [Yeni Satır] - Geçerliyse, callback ile true gönder
        }
    };

    return (
        <FormGroup>
            <Label for="name" style={{ display: 'block', textAlign: 'left', fontWeight: 'bold' }}>İsim Soyisim</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="İsim ve soyisim yazın..."
                style={{ padding: '1rem' }}
                value={name}
                onChange={handleChange}
            />
            {error && <p style={{ color: 'red', textAlign: 'left' }}>{error}</p>}
        </FormGroup>
    );
}
