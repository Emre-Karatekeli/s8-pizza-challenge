import { Form, FormGroup, Input, Label, Nav, NavItem, NavLink } from 'reactstrap'
import './OrderPage.css'
import CheckboxList from './CheckboxList';
import CounterWithOrder from './CounterWithOrder';
import React, { useState } from 'react';
import NameInput from './NameInput';


export default function OrderPage() {
    const [isOrderDisabled, setIsOrderDisabled] = useState(false); // [Yeni Satır] - Sipariş butonunun aktifliğini kontrol eden state

    const handleValidationChange = (isCheckboxValid, isNameValid) => { // [Yeni Satır] - Tüm validasyonları kontrol eden callback fonksiyonu
        setIsOrderDisabled(!(isCheckboxValid && isNameValid)); // Eğer validasyonlardan biri başarısızsa butonu pasif yap
    };
    return (
        <div className='order-page-container'>
            <header className="header">
                <h1>Teknolojik Yemekler</h1>
                <Nav>
                    <NavItem>
                        <NavLink
                            href="/HomePage">
                            Ana Sayfa
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Order">
                            Sipariş Oluştur
                        </NavLink>
                    </NavItem>
                </Nav>
            </header>
            <section class="ordered-pizza">
                <h2>Position Absolute Acı Pizza</h2>
                <div class="price-info">
                    <span class="total-price">85.50 ₺</span>
                    <span class="average-rating">4.9</span>
                    <span class="quantity">(200)</span>
                </div>
            </section>
            <section class="pizza-description">
                <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
            </section>
            <section class="choose-size-and-dough">
                <div class="chose-size">
                    <Form>
                        <FormGroup>
                            <Label for="sizeSelection" style={{ fontWeight: 'bold' }}>Boyut Seç*</Label>
                            <div>
                                <Input
                                    type="radio"
                                    id="kucuk"
                                    name="size"
                                />
                                <Label for="kucuk">Küçük</Label>
                            </div>
                            <div>
                                <Input
                                    type="radio"
                                    id="orta"
                                    name="size"
                                />
                                <Label for="orta">Orta</Label>
                            </div>
                            <div>
                                <Input
                                    type="radio"
                                    id="buyuk"
                                    name="size"
                                />
                                <Label for="buyuk">Büyük</Label>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
                <div class="dough-selection">
                    <label for="dough-select" style={{ fontWeight: 'bold' }}>Hamur Seç*</label>
                    <select id="dough-select">
                        <option value="">--Hamur Kalınlığı--</option>
                        <option value="ince">İnce</option>
                        <option value="orta">Orta</option>
                        <option value="kalin">Kalın</option>
                    </select>
                </div>
            </section >
            <section class="additional-ingredients">
                <CheckboxList onValidationChange={(isCheckboxValid) => handleValidationChange(isCheckboxValid, null)} /> {/* [Değişiklik] - CheckboxList'in onValidationChange fonksiyonunu çağırmak için */}
            </section>
            <section class="siparis-notu">
                <Form>
                    <NameInput onValidationChange={(isNameValid) => handleValidationChange(null, isNameValid)} /> {/* [Değişiklik] - NameInput'un onValidationChange fonksiyonunu çağırmak için */}
                    <FormGroup>
                        <Label for="orderNote" style={{ display: 'block', textAlign: 'left', fontWeight: 'bold' }}>Sipariş Notu</Label>
                        <Input
                            type="textarea"
                            name="orderNote"
                            id="orderNote"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            style={{ padding: '1rem' }}
                        />
                    </FormGroup>
                </Form>
            </section>
            <section className="siparisler-toplami">
                <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Siparişler Toplamı</p>
                <p>Seçimler: 25.00₺</p>
                <p>Toplam: 110.50₺</p>
            </section>
            <div className='counter-order'>
                <CounterWithOrder isDisabled={isOrderDisabled} /> {/* [Değişiklik] - CounterWithOrder'a isDisabled prop'u eklenerek sipariş butonu kontrol edildi */}
            </div>
        </div>
    )


}