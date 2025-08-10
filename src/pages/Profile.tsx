import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  User, 
  MapPin, 
  CreditCard,
  Package,
  Heart,
  Settings,
  Bell,
  Shield,
  Gift
} from 'lucide-react';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const orders = [
    {
      id: '12345',
      date: '2024-01-15',
      status: 'Доставлен',
      total: 2450,
      items: 8,
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '12344',
      date: '2024-01-10',
      status: 'В пути',
      total: 1890,
      items: 5,
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: '12343',
      date: '2024-01-05',
      status: 'Отменен',
      total: 3200,
      items: 12,
      statusColor: 'bg-red-100 text-red-800'
    }
  ];

  const addresses = [
    {
      id: 1,
      title: 'Дом',
      address: 'г. Москва, ул. Ленина, д. 15, кв. 42',
      isDefault: true
    },
    {
      id: 2,
      title: 'Офис',
      address: 'г. Москва, ул. Тверская, д. 25, офис 301',
      isDefault: false
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Яблоки красные',
      price: 120,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Молоко 3.2%',
      price: 85,
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  if (!isLoggedIn) {
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
                  <Button variant="outline" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Корзина
                  </Button>
                </Link>
                <Button size="sm" onClick={() => setIsLoggedIn(true)}>Войти</Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Вход в личный кабинет</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email или телефон</label>
                  <Input placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Пароль</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Войти
                </Button>
                <div className="text-center">
                  <Button variant="link" className="text-sm">
                    Забыли пароль?
                  </Button>
                </div>
                <div className="border-t pt-4">
                  <p className="text-center text-sm text-gray-600 mb-4">
                    Нет аккаунта?
                  </p>
                  <Button variant="outline" className="w-full">
                    Зарегистрироваться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                </Button>
              </Link>
              <Button size="sm" onClick={() => setIsLoggedIn(false)}>Выйти</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="font-semibold text-lg">Анна Петрова</h2>
                  <p className="text-gray-600">anna@example.com</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                    <span className="text-sm">Бонусные баллы</span>
                    <Badge className="bg-green-600">1,250</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
                    <span className="text-sm">Статус</span>
                    <Badge className="bg-blue-600">VIP</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <Tabs defaultValue="orders" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Заказы
                </TabsTrigger>
                <TabsTrigger value="addresses" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Адреса
                </TabsTrigger>
                <TabsTrigger value="favorites" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Избранное
                </TabsTrigger>
                <TabsTrigger value="bonuses" className="flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  Бонусы
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Настройки
                </TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Мои заказы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h3 className="font-semibold">Заказ #{order.id}</h3>
                              <p className="text-sm text-gray-600">{order.date}</p>
                            </div>
                            <Badge className={order.statusColor}>
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">
                                {order.items} товаров на сумму {order.total.toLocaleString()}₽
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Подробнее
                              </Button>
                              {order.status === 'Доставлен' && (
                                <Button size="sm">Повторить заказ</Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Адреса доставки</CardTitle>
                      <Button>Добавить адрес</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">{address.title}</h3>
                                {address.isDefault && (
                                  <Badge variant="outline">По умолчанию</Badge>
                                )}
                              </div>
                              <p className="text-gray-600">{address.address}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Изменить</Button>
                              <Button variant="outline" size="sm">Удалить</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <CardTitle>Избранные товары</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {favorites.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4">
                          <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-semibold mb-2">{item.name}</h3>
                          <p className="text-green-600 font-bold mb-3">{item.price}₽</p>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">В корзину</Button>
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Bonuses Tab */}
              <TabsContent value="bonuses">
                <Card>
                  <CardHeader>
                    <CardTitle>Бонусная программа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">1,250 баллов</h3>
                        <p>Доступно для использования</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Как получить баллы</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 1 балл за каждые 100₽ покупок</li>
                            <li>• Бонусы за отзывы</li>
                            <li>• Специальные акции</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Как потратить</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 1 балл = 1₽ скидки</li>
                            <li>• Минимум 100 баллов</li>
                            <li>• До 30% от суммы заказа</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Личная информация</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Имя</label>
                          <Input defaultValue="Анна" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Фамилия</label>
                          <Input defaultValue="Петрова" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input defaultValue="anna@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input defaultValue="+7 (999) 123-45-67" />
                      </div>
                      <Button>Сохранить изменения</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Уведомления</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">SMS уведомления</h4>
                          <p className="text-sm text-gray-600">О статусе заказа</p>
                        </div>
                        <Button variant="outline" size="sm">Включено</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email рассылка</h4>
                          <p className="text-sm text-gray-600">Акции и новости</p>
                        </div>
                        <Button variant="outline" size="sm">Отключено</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Безопасность</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Shield className="h-4 w-4 mr-2" />
                        Изменить пароль
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Управление картами
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;