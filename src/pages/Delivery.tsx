import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Truck, 
  Clock, 
  MapPin, 
  CreditCard,
  Shield,
  Calendar,
  Phone
} from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центр города', time: '30 минут', price: 'Бесплатно от 1500₽', color: 'bg-green-100 text-green-800' },
    { zone: 'Спальные районы', time: '45 минут', price: 'Бесплатно от 2000₽', color: 'bg-blue-100 text-blue-800' },
    { zone: 'Пригород', time: '60 минут', price: 'Бесплатно от 3000₽', color: 'bg-orange-100 text-orange-800' }
  ];

  const timeSlots = [
    '09:00 - 11:00',
    '11:00 - 13:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '17:00 - 19:00',
    '19:00 - 21:00'
  ];

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
              <Link to="/delivery" className="text-green-600 font-medium">Доставка</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">О нас</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-green-600">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка продуктов</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Быстрая и надежная доставка свежих продуктов прямо к вашей двери. 
            Работаем ежедневно с 8:00 до 23:00.
          </p>
        </div>

        {/* Delivery Zones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Badge className={`mx-auto w-fit ${zone.color}`}>
                    {zone.zone}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="font-semibold">{zone.time}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-gray-500 mr-2" />
                      <span>{zone.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Как работает доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Оформите заказ</h3>
              <p className="text-gray-600">Выберите товары и добавьте их в корзину</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Укажите адрес</h3>
              <p className="text-gray-600">Введите точный адрес доставки</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Оплатите</h3>
              <p className="text-gray-600">Выберите удобный способ оплаты</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Получите заказ</h3>
              <p className="text-gray-600">Курьер привезет продукты в указанное время</p>
            </div>
          </div>
        </section>

        {/* Time Slots */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Время доставки</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {timeSlots.map((slot, index) => (
                  <div key={index} className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                    <Calendar className="h-5 w-5 mx-auto mb-2 text-gray-500" />
                    <span className="font-medium">{slot}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Также доступна экспресс-доставка за 30 минут (+200₽)
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Заказать экспресс-доставку
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Преимущества нашей доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
                <p className="text-gray-600">Проверяем каждый товар перед доставкой</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Точное время</h3>
                <p className="text-gray-600">Доставляем строго в указанное время</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Уведомления</h3>
                <p className="text-gray-600">SMS и звонки о статусе заказа</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Бесконтактная доставка</h3>
                <p className="text-gray-600">Безопасная доставка к двери</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Стоимость доставки</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Заказ до 1500₽</span>
                  <span className="font-semibold">200₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Заказ от 1500₽ до 3000₽</span>
                  <span className="font-semibold">100₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Заказ от 3000₽</span>
                  <span className="font-semibold text-green-600">Бесплатно</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>Экспресс-доставка (30 мин)</span>
                  <span className="font-semibold">+200₽</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли изменить время доставки?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, вы можете изменить время доставки не позднее чем за 2 часа до указанного времени. 
                  Для этого свяжитесь с нашей службой поддержки.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что делать, если товара нет в наличии?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы свяжемся с вами и предложим замену или вернем деньги за отсутствующий товар. 
                  Доставка остальных товаров будет выполнена в срок.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как отследить заказ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  После оформления заказа вы получите SMS с номером заказа. 
                  Отследить статус можно в личном кабинете или по телефону поддержки.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Готовы сделать заказ?</h2>
              <p className="text-xl mb-6">
                Выберите свежие продукты из нашего каталога и получите доставку уже сегодня!
              </p>
              <Link to="/catalog">
                <Button size="lg" variant="secondary">
                  Перейти в каталог
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Delivery;