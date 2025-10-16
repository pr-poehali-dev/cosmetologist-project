import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: 'Чистка лица',
      description: 'Глубокое очищение и обновление кожи',
      price: '5 000 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Биоревитализация',
      description: 'Глубокое увлажнение и омоложение',
      price: '12 000 ₽',
      icon: 'Droplet'
    },
    {
      title: 'Ботулинотерапия',
      description: 'Коррекция мимических морщин',
      price: '15 000 ₽',
      icon: 'Smile'
    },
    {
      title: 'Контурная пластика',
      description: 'Коррекция объемов лица',
      price: '18 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Пилинги',
      description: 'Обновление и выравнивание тона',
      price: '6 000 ₽',
      icon: 'Leaf'
    },
    {
      title: 'Мезотерапия',
      description: 'Питание и восстановление кожи',
      price: '8 000 ₽',
      icon: 'Sparkle'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/ba4fc2d6-053b-40db-b264-75392f64347f/files/af8c7025-f4a2-420d-8f4f-1de08d940f57.jpg',
      title: 'Биоревитализация',
      description: 'Результат после курса процедур'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ba4fc2d6-053b-40db-b264-75392f64347f/files/3872cbd7-dba2-4d89-8705-001f6b8255aa.jpg',
      title: 'Контурная пластика',
      description: 'Естественная коррекция объемов'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ba4fc2d6-053b-40db-b264-75392f64347f/files/37b976f8-1897-42cd-b68e-84c3b42318cf.jpg',
      title: 'Комплексный уход',
      description: 'Преображение за 3 месяца'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-2xl font-semibold text-[#1A1A1A]">
              Татьяна Степанова
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm hover:text-[#D4AF37] transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm hover:text-[#D4AF37] transition-colors"
              >
                О мне
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm hover:text-[#D4AF37] transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm hover:text-[#D4AF37] transition-colors"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection('price')}
                className="text-sm hover:text-[#D4AF37] transition-colors"
              >
                Прайс
              </button>
              <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-white">
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 animate-fade-in-up">
            Красота вашей кожи —<br />
            <span className="text-[#D4AF37]">моя забота</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональная косметология с применением премиальных препаратов
            и индивидуальным подходом к каждому клиенту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-[#D4AF37] hover:bg-[#C19A2E] text-white px-8 py-6 text-lg"
            >
              Мои услуги
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-6 text-lg"
            >
              Обо мне
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-lg transform -rotate-3"></div>
              <img
                src="https://cdn.poehali.dev/projects/ba4fc2d6-053b-40db-b264-75392f64347f/files/37b976f8-1897-42cd-b68e-84c3b42318cf.jpg"
                alt="Татьяна Степанова"
                className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Обо мне
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Я — Татьяна Степанова, врач-косметолог с более чем 10-летним опытом работы.
                Моя философия — естественная красота и здоровье кожи.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Использую только сертифицированные премиальные препараты и современные методики,
                которые доказали свою эффективность и безопасность. Каждый клиент получает
                индивидуальный план ухода, основанный на глубоком анализе состояния кожи.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-[#D4AF37] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Сертифицированный специалист</h3>
                    <p className="text-sm text-gray-600">Регулярное повышение квалификации</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" className="text-[#D4AF37] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Индивидуальный подход</h3>
                    <p className="text-sm text-gray-600">Программа ухода для каждого клиента</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-[#D4AF37] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Безопасность превыше всего</h3>
                    <p className="text-sm text-gray-600">Только проверенные препараты</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Мои услуги
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Широкий спектр косметологических процедур для здоровья и красоты вашей кожи
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-[#D4AF37]" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-[#1A1A1A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-[#D4AF37]">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Портфолио
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Результаты моей работы говорят сами за себя
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-playfair text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Прайс-лист
            </h2>
            <p className="text-gray-600 text-lg">
              Прозрачные цены на все процедуры
            </p>
          </div>
          <Card className="bg-white border-none shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center pb-6 border-b border-gray-100 last:border-0">
                    <div className="flex items-start gap-3">
                      <Icon name={service.icon} className="text-[#D4AF37] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-[#1A1A1A] text-lg">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <span className="text-xl font-semibold text-[#D4AF37] whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Точную стоимость курса процедур определяем на консультации
                </p>
                <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-white px-8">
                  Записаться на консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#1A1A1A] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-[#D4AF37]">
                Татьяна Степанова
              </h3>
              <p className="text-gray-400 text-sm">
                Профессиональная косметология премиум-класса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@stepanova-cosmetology.ru</p>
                <p>г. Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб: 11:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Татьяна Степанова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}