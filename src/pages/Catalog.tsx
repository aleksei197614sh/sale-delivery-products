import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star,
  Grid,
  List
} from 'lucide-react';

const Catalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Все товары',
    'Овощи и фрукты',
    'Мясо и птица',
    'Молочные продукты',
    'Хлеб и выпечка',
    'Напитки',
    'Замороженные продукты',
    'Консервы'
  ];

  const products = [
    {
      id: 1,
      name: 'Яблоки красные',
      price: 120,
      oldPrice: 150,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Овощи и фрукты',
      rating: 4.8,
      discount: 20,
      inStock: true
    },
    {
      id: 2,
      name: 'Молоко 3.2%',
      price: 85,
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Молочные продукты',
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: 'Хлеб белый',
      price: 45,
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Хлеб и выпечка',
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: 'Куриная грудка',
      price: 320,
      image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Мясо и птица',
      rating: 4.6,
      inStock: false
    },
    {
      id: 5,
      name: 'Бананы',
      price: 95,
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Овощи и фрукты',
      rating: 4.5,
      inStock: true
    },
    {
      id: 6,
      name: 'Сыр российский',
      price: 280,
      image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Молочные продукты',
      rating: 4.8,
      inStock: true
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
              <Link to="/catalog" className="text-green-600 font-medium">Каталог</Link>
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Категории</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="text-left w-full py-2 px-3 rounded hover:bg-gray-100 text-gray-700">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Цена</h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="От" type="number" />
                    <Input placeholder="До" type="number" />
                  </div>
                  <Button className="w-full">Применить</Button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Рейтинг</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">и выше</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Controls */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Фильтры
                  </Button>
                  <div className="flex border rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-48' : 'aspect-square'} overflow-hidden`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.discount && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          -{product.discount}%
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-semibold">Нет в наличии</span>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className={`${viewMode === 'list' ? 'flex justify-between items-start' : ''}`}>
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                          
                          <div className="flex items-center mb-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold text-green-600">
                              {product.price}₽
                            </span>
                            {product.oldPrice && (
                              <span className="text-lg text-gray-400 line-through">
                                {product.oldPrice}₽
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className={`${viewMode === 'list' ? 'ml-4' : ''}`}>
                          <Button
                            className="w-full"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Предыдущая</Button>
                <Button variant="outline" className="bg-green-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Следующая</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;