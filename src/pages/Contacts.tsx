import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Headphones,
  Users
} from 'lucide-react';

const Contacts = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      info: '+7 (495) 123-45-67',
      description: 'Круглосуточная поддержка',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@freshmarket.ru',
      description: 'Ответим в течение часа',
      color: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Онлайн-чат',
      info: 'Чат на сайте',
      description: 'Мгновенные ответы',
      color: 'text-purple-600'
    },
    {
      icon: Headphones,
      title: 'Горячая линия',
      info: '8-800-555-35-35',
      description: 'Бесплатно по России',
      color: 'text-orange-600'
    }
  ];

  const offices = [
    {
      title: 'Главный офис',
      address: 'г. Москва, ул. Тверская, д. 15, офис 301',
      phone: '+7 (495) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      coordinates: '55.7558, 37.6176'
    },
    {
      title: 'Склад и логистический центр',
      address: 'г. Москва, Варшавское шоссе, д. 42',
      phone: '+7 (495) 123-45-68',
      hours: 'Круглосуточно',
      coordinates: '55.6037, 37.6064'
    },
    {
      title: 'Центр обслуживания клиентов',
      address: 'г. Москва, ул. Арбат, д. 25',
      phone: '+7 (495) 123-45-69',
      hours: 'Пн-Вс: 8:00-22:00',
      coordinates: '55.7520, 37.5954'
    }
  ];

  const departments = [
    {
      name: 'Служба поддержки',
      phone: '+7 (495) 123-45-67',
      email: 'support@freshmarket.ru',
      hours: '24/7'
    },
    {
      name: 'Отдел продаж',
      phone: '+7 (495) 123-45-70',
      email: 'sales@freshmarket.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    },
    {
      name: 'Отдел качества',
      phone: '+7 (495) 123-45-71',
      email: 'quality@freshmarket.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    },
    {
      name: 'Корпоративные клиенты',
      phone: '+7 (495) 123-45-72',
      email: 'corporate@freshmarket.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    }
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
              <Link to="/delivery" className="text-gray-700 hover:text-green-600">Доставка</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">О нас</Link>
              <Link to="/contacts" className="text-green-600 font-medium">Контакты</Link>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы помочь! Свяжитесь с нами любым удобным способом.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="font-medium text-gray-900 mb-1">{method.info}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тема</label>
                      <Input placeholder="Тема обращения" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос или предложение..."
                        rows={5}
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Часы работы</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="font-semibold text-lg">Служба поддержки</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Понедельник - Воскресенье</span>
                      <span className="font-medium">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-lg">Офис</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота - Воскресенье</span>
                      <span className="font-medium">Выходной</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Экстренная связь</h3>
                  <p className="text-gray-600 mb-4">
                    Если у вас срочный вопрос по заказу или проблема с доставкой, 
                    звоните по номеру экстренной связи:
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-2" />
                      <span className="font-bold text-red-600">+7 (495) 911-11-11</span>
                    </div>
                    <p className="text-sm text-red-600 mt-1">Круглосуточно</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Наши офисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-2" />
                    {office.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Адрес:</p>
                      <p className="font-medium">{office.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Телефон:</p>
                      <p className="font-medium">{office.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Часы работы:</p>
                      <p className="font-medium">{office.hours}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Показать на карте
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Отделы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">{dept.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-500 mr-2" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-500 mr-2" />
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-500 mr-2" />
                      <span>{dept.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Как нас найти</h2>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500">г. Москва, ул. Тверская, д. 15</p>
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
                <CardTitle className="text-lg">Как быстро вы отвечаете на обращения?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы стараемся отвечать на все обращения в течение 1 часа в рабочее время. 
                  В выходные дни время ответа может увеличиться до 2-3 часов.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли приехать в офис без записи?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, вы можете приехать в наш офис в рабочее время. Однако мы рекомендуем 
                  предварительно позвонить, чтобы убедиться, что нужный специалист будет на месте.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Есть ли у вас мобильное приложение?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, у нас есть мобильное приложение для iOS и Android. Скачать его можно 
                  в App Store и Google Play. В приложении также есть функция чата с поддержкой.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
              <p className="text-xl mb-6">
                Наша команда поддержки готова помочь вам 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="h-5 w-5 mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Открыть чат
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contacts;