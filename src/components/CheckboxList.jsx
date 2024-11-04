import { Form, FormGroup, Input, Label } from 'reactstrap';

export default function CheckboxList() {
    // Ek malzeme isimleri
    const ingredients = [
        'Pepperoni', 'Sosis',
        'Kanada Jambonu', 'Tavuk Izgara',
        'Soğan', 'Domates',
        'Mısır', 'Sucuk',
        'Jalepeno', 'Sarımsak',
        'Biber', 'Sucuk',
        'Ananas', 'Kabak'
    ];

    return (
        <Form>
            <p style={{textAlign: 'left', fontWeight: 'bold', padding: '5px 0' }}>Ek Malzemeler</p>
            <p style={{textAlign: 'left', padding: '5px 0'}}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <FormGroup className="d-flex flex-wrap">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="d-flex align-items-center" style={{ width: '50%' }}>
                        <Label>
                            <Input type="checkbox" />
                            {ingredient}
                        </Label>
                    </div>
                ))}
            </FormGroup>
        </Form>
    );
}
