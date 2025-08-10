import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Users, 
  Award, 
  Heart,
  Target,
  Leaf,
  Shield,
  Clock
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Забота о клиентах',
      description: 'Мы всегда ставим интересы наших клиентов на первое место'
    },
    {
      icon: Shield,
      title: 'Качество продуктов',
      description: 'Строгий контроль качества на всех этапах от поставщика до клиента'
    },
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Поддерживаем местных фермеров и заботимся об окружающей среде'
    },
    {
      icon: Clock,
      title: 'Надежность',
      description: 'Всегда выполняем обещания и доставляем заказы вовремя'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '15 лет опыта в ритейле'
    },
    {
      name: 'Михаил Иванов',
      position: 'Директор по логистике',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Эксперт в области доставки'
    },
    {
      name: 'Елена Сидорова',
      position: 'Менеджер по качеству',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Контроль качества продуктов'
    }
  ];

  const achievements = [
    { number: '50,000+', label: 'Довольных клиентов' },
    { number: '15', label: 'Лет на рынке' },
    { number: '1,000+', label: 'Товаров в ассортименте' },
    { number: '99.9%', label: 'Время работы сервиса' }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <Link to="/about" className="text-green-600 font-medium">О нас</Link>
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">О компании ФрешМаркет</h1>
            <p className="text-xl text-gray-600 mb-8">
              Мы создали сервис доставки продуктов, который делает покупку свежих и качественных 
              товаров максимально удобной для каждой семьи.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ФрешМаркет был основан в 2009 году с простой идеей: сделать покупку продуктов 
                  удобной и доступной для всех. Мы начинали как небольшой семейный бизнес с одним 
                  магазином и мечтой о том, чтобы каждая семья могла получать свежие продукты 
                  высокого качества.
                </p>
                <p>
                  За 15 лет работы мы выросли в крупную сеть с современной логистикой и 
                  собственными складами. Сегодня мы обслуживаем более 50,000 клиентов и 
                  продолжаем расширяться, сохраняя при этом семейные ценности и персональный 
                  подход к каждому покупателю.
                </p>
                <p>
                  Наша команда состоит из профессионалов, которые разделяют общую страсть к 
                  качественным продуктам и отличному сервису. Мы гордимся тем, что помогаем 
                  семьям экономить время и получать удовольствие от покупок.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Наша история"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold">Наша миссия</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Сделать покупку продуктов простой, удобной и приятной для каждой семьи. 
                Мы стремимся предоставлять только качественные товары по справедливым ценам 
                с быстрой и надежной доставкой.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold">Наше видение</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Стать ведущим сервисом доставки продуктов в России, который устанавливает 
                новые стандарты качества обслуживания и заботы об окружающей среде.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-green-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Контроль качества"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Наши обязательства по качеству</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Строгий отбор поставщиков</h3>
                    <p className="text-gray-600">Работаем только с проверенными фермами и производителями</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Контроль на каждом этапе</h3>
                    <p className="text-gray-600">От склада до доставки - многоуровневая проверка качества</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Обученная команда</h3>
                    <p className="text-gray-600">Регулярное обучение сотрудников стандартам качества</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нашей семье</h2>
              <p className="text-xl mb-6">
                Более 50,000 семей уже доверяют нам свои покупки. 
                Станьте частью сообщества ФрешМаркет!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/catalog">
                  <Button size="lg" variant="secondary">
                    Начать покупки
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;