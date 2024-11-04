import React, { useState } from 'react';

export default function CounterWithOrder() {
    const [count, setCount] = useState(1);

    const handleDecrease = () => {
        setCount(count > 1 ? count - 1 : 1); // Sayı 1'den aşağı düşmesin
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleOrder = () => {
        alert(`Sipariş verildi: ${count} adet`);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <button
                onClick={handleDecrease}
                style={{ backgroundColor: '#FDC913', margin: '0 0.5rem', width:'15%'}}
            >
                -
            </button>
            <span style={{ margin: '0 1rem' }}>{count}</span>
            <button
                onClick={handleIncrease}
                style={{ backgroundColor: '#FDC913', margin: '0 0.5rem', width:'15%' }}
            >
                +
            </button>
            <button onClick={handleOrder} style={{ backgroundColor: '#FDC913', marginLeft: '1rem', width:'48%' }}>
                SİPARİŞ VER
            </button>
        </div>
    );
}
