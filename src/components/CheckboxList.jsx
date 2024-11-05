import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export default function CheckboxList({ onValidationChange, onPriceChange  }) {
    const ingredients = [
        'Pepperoni', 'Sosis',
        'Kanada Jambonu', 'Tavuk Izgara',
        'Soğan', 'Domates',
        'Mısır', 'Sucuk',
        'Jalepeno', 'Sarımsak',
        'Biber', 'Sucuk',
        'Ananas', 'Kabak'
    ];

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [error, setError] = useState('');

    const handleCheckboxChange = (ingredient) => {
        const isSelected = selectedIngredients.includes(ingredient);

        let updatedSelection;
        if (isSelected) {
            updatedSelection = selectedIngredients.filter(item => item !== ingredient);
        } else {
            updatedSelection = [...selectedIngredients, ingredient];
        }

        if (updatedSelection.length < 4 || updatedSelection.length > 10) {
            setError('En az 4, en fazla 10 adet seçim yapılabilir.');
            onValidationChange(false); // [Yeni Satır] - Geçersizse, callback ile false gönder
        } else {
            setError('');
            onValidationChange(true); // [Yeni Satır] - Geçerliyse, callback ile true gönder
        }

        setSelectedIngredients(updatedSelection);

        const price = updatedSelection.length * 5; // [Yeni Satır]
        onPriceChange(price); // [Yeni Satır]
    };

    return (
        <Form>
            <p style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0' }}>Ek Malzemeler</p>
            <p style={{ textAlign: 'left', padding: '5px 0' }}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <FormGroup className="d-flex flex-wrap">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="d-flex align-items-center" style={{ width: '50%' }}>
                        <Label>
                            <Input
                                type="checkbox"
                                checked={selectedIngredients.includes(ingredient)}
                                onChange={() => handleCheckboxChange(ingredient)}
                            />
                            {ingredient}
                        </Label>
                    </div>
                ))}
            </FormGroup>
            {error && <p style={{ color: 'red', textAlign: 'left' }}>{error}</p>}
        </Form>
    );
}
