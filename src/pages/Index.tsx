import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Truck, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  Leaf, 
  Award,
  MapPin,
  Phone
} from 'lucide-react';

const Index = () => {
  const categories = [
    { name: 'Овощи и фрукты', image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400', count: '150+ товаров' },
    { name: 'Мясо и птица', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400', count: '80+ товаров' },
    { name: 'Молочные продукты', image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400', count: '120+ товаров' },
    { name: 'Хлеб и выпечка', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400', count: '60+ товаров' }
  ];

  const features = [
    { icon: Truck, title: 'Быстрая доставка', description: 'Доставляем за 30 минут по городу' },
    { icon: Shield, title: 'Гарантия качества', description: 'Только свежие и качественные продукты' },
    { icon: Clock, title: 'Работаем 24/7', description: 'Круглосуточная служба поддержки' },
    { icon: Star, title: 'Высокий рейтинг', description: '4.9 звезд от наших клиентов' }
  ];

  const stats = [
    { number: '50,000+', label: 'Довольных клиентов' },
    { number: '1,000+', label: 'Товаров в каталоге' },
    { number: '15', label: 'Лет на рынке' },
    { number: '99.9%', label: 'Время работы сервиса' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">ФрешМаркет</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/catalog" className="text-gray-700 hover:text-green-600">Каталог</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-green-600">Доставка</Link>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Свежие продукты с доставкой на дом
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Более 1000 качественных продуктов от лучших поставщиков. 
            Быстрая доставка за 30 минут по всему городу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Начать покупки
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Как это работает
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Специальные предложения</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
              <CardContent className="p-8">
                <Badge className="bg-white text-orange-500 mb-4">Скидка 30%</Badge>
                <h3 className="text-2xl font-bold mb-2">Фрукты и овощи</h3>
                <p className="mb-4">Свежие сезонные фрукты и овощи со скидкой до 30%</p>
                <Link to="/promotions/fruits-vegetables">
                  <Button variant="secondary">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              <CardContent className="p-8">
                <Badge className="bg-white text-blue-500 mb-4">Бесплатная доставка</Badge>
                <h3 className="text-2xl font-bold mb-2">При заказе от 2000₽</h3>
                <p className="mb-4">Бесплатная доставка по городу при заказе от 2000 рублей</p>
                <Link to="/delivery-info">
                  <Button variant="secondary">Узнать больше</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Выберите продукты</h3>
              <p className="text-gray-600">Просмотрите каталог и добавьте нужные товары в корзину</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Оформите заказ</h3>
              <p className="text-gray-600">Укажите адрес доставки и выберите удобное время</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Получите заказ</h3>
              <p className="text-gray-600">Курьер доставит свежие продукты прямо к вашей двери</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold">Экологичность</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Мы заботимся об окружающей среде и поддерживаем местных фермеров. 
                Используем экологичную упаковку и минимизируем пищевые отходы.
              </p>
              <Link to="/sustainability">
                <Button className="bg-green-600 hover:bg-green-700">
                  Узнать больше
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Экологичные продукты"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Контроль качества</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Каждый продукт проходит строгий контроль качества. 
                Мы работаем только с проверенными поставщиками и гарантируем свежесть товаров.
              </p>
              <Link to="/quality">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Наши стандарты
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Контроль качества"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', rating: 5, text: 'Отличный сервис! Продукты всегда свежие, доставка быстрая.' },
              { name: 'Михаил Иванов', rating: 5, text: 'Пользуюсь уже год. Очень удобно и качественно!' },
              { name: 'Елена Сидорова', rating: 5, text: 'Лучший сервис доставки продуктов в городе. Рекомендую!' }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Link to="/contacts">
                <Button variant="secondary" size="lg">
                  Все контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingCart className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">ФрешМаркет</span>
              </div>
              <p className="text-gray-400">
                Лучший сервис доставки свежих продуктов в вашем городе.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/category/vegetables" className="hover:text-white">Овощи и фрукты</Link></li>
                <li><Link to="/category/meat" className="hover:text-white">Мясо и птица</Link></li>
                <li><Link to="/category/dairy" className="hover:text-white">Молочные продукты</Link></li>
                <li><Link to="/category/bakery" className="hover:text-white">Хлеб и выпечка</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Сервис</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/delivery" className="hover:text-white">Доставка</Link></li>
                <li><Link to="/payment" className="hover:text-white">Оплата</Link></li>
                <li><Link to="/returns" className="hover:text-white">Возврат</Link></li>
                <li><Link to="/support" className="hover:text-white">Поддержка</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">О нас</Link></li>
                <li><Link to="/careers" className="hover:text-white">Карьера</Link></li>
                <li><Link to="/news" className="hover:text-white">Новости</Link></li>
                <li><Link to="/contacts" className="hover:text-white">Контакты</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ФрешМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;