import { DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import './OrderPage.css'

export default function OrderPage() {
    return (
        <>
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
            <section class="choose-size-and-crust">
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
                <div>
                    
                </div>
            </section >
        </>
    )


}