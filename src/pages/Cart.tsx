import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2,
  ArrowLeft,
  Tag
} from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Яблоки красные',
      price: 120,
      quantity: 2,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      unit: 'кг'
    },
    {
      id: 2,
      name: 'Молоко 3.2%',
      price: 85,
      quantity: 1,
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
      unit: 'л'
    },
    {
      id: 3,
      name: 'Хлеб белый',
      price: 45,
      quantity: 3,
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
      unit: 'шт'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === 'FRESH10') {
      setDiscount(10);
    } else if (promoCode === 'SAVE20') {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const deliveryFee = subtotal >= 1500 ? 0 : 200;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">ФрешМаркет</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/catalog" className="text-gray-700 hover:text-green-600">Каталог</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-green-600">Доставка</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">О нас</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-green-600">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="sm" className="bg-green-50">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина ({cartItems.length})
                </Button>
              </Link>
              <Link to="/profile">
                <Button size="sm">Войти</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/catalog" className="flex items-center text-gray-600 hover:text-green-600 mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Продолжить покупки
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Корзина пуста</h2>
            <p className="text-gray-500 mb-6">Добавьте товары из каталога</p>
            <Link to="/catalog">
              <Button className="bg-green-600 hover:bg-green-700">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 pb-6 border-b last:border-b-0">
                        <div className="w-20 h-20 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-gray-600">{item.price}₽ за {item.unit}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-lg">
                            {(item.price * item.quantity).toLocaleString()}₽
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Promo Code */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Промокод</h3>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                    </div>
                    <Button onClick={applyPromoCode} variant="outline">
                      <Tag className="h-4 w-4 mr-2" />
                      Применить
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-green-600 mt-2">
                      Промокод применен! Скидка {discount}%
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Итого</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Товары ({cartItems.length})</span>
                      <span>{subtotal.toLocaleString()}₽</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка ({discount}%)</span>
                        <span>-{discountAmount.toLocaleString()}₽</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-green-600">Бесплатно</span>
                        ) : (
                          `${deliveryFee}₽`
                        )}
                      </span>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>К оплате</span>
                        <span>{total.toLocaleString()}₽</span>
                      </div>
                    </div>
                  </div>

                  {subtotal < 1500 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-blue-700">
                        Добавьте товаров на {(1500 - subtotal).toLocaleString()}₽ 
                        для бесплатной доставки
                      </p>
                    </div>
                  )}

                  <Link to="/checkout">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                      Оформить заказ
                    </Button>
                  </Link>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Безопасная оплата картой или наличными
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;