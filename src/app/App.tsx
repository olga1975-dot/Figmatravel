import { Plane, Hotel, UtensilsCrossed, MapPin, AlertCircle, Landmark, Users, Trophy, Laptop, Calendar, DollarSign, Sparkles, Globe } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

export default function App() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-red-500 text-white p-10 text-3xl">
  TAILWIND WORKS
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-[#0f1420]">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-primary">Курс английского языка</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Английский для путешествий
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, 
              поездках и будущих путешествиях!
            </p>
            <Button 
              onClick={scrollToEnroll}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Записаться на курс
            </Button>
          </div>
        </div>
      </header>

      {/* Target Audience */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl text-primary">Для кого курс</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-primary/20 p-8 hover:border-primary/40 transition-colors">
                <div className="text-2xl mb-2 text-primary">Первая группа</div>
                <p className="text-xl text-foreground">4–5 класс</p>
              </Card>
              <Card className="bg-card border-secondary/20 p-8 hover:border-secondary/40 transition-colors">
                <div className="text-2xl mb-2 text-secondary">Вторая группа</div>
                <p className="text-xl text-foreground">6–8 класс</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl text-accent">Программа курса</h2>
            </div>
            <div className="space-y-6">
              {/* Module 1 */}
              <Card className="bg-card border-primary/20 p-6 md:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Plane className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-primary">Аэропорт без стресса</h3>
                    <p className="text-muted-foreground mb-3">
                      Регистрация, паспортный контроль, вопросы на таможне — всё на английском.
                    </p>
                    <p className="text-accent">👉 Уверенность уже в первые часы за границей.</p>
                  </div>
                </div>
              </Card>

              {/* Module 2 */}
              <Card className="bg-card border-secondary/20 p-6 md:p-8 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Hotel className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-secondary">В отеле: заселение и помощь</h3>
                    <p className="text-muted-foreground mb-3">
                      Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
                    </p>
                    <p className="text-accent">👉 Практика вежливых фраз и повседневной лексики.</p>
                  </div>
                </div>
              </Card>

              {/* Module 3 */}
              <Card className="bg-card border-primary/20 p-6 md:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <UtensilsCrossed className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-primary">Кафе и рестораны</h3>
                    <p className="text-muted-foreground mb-3">
                      Заказ еды, вопросы про аллергены, счёт и чаевые.
                    </p>
                    <p className="text-accent">👉 Развитие гастрономического словаря и уверенности в общении.</p>
                  </div>
                </div>
              </Card>

              {/* Module 4 */}
              <Card className="bg-card border-secondary/20 p-6 md:p-8 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-secondary">На улице: ориентирование и просьбы</h3>
                    <p className="text-muted-foreground mb-3">
                      Как спросить дорогу, вызвать такси или найти аптеку.
                    </p>
                    <p className="text-accent">👉 Понимание устной речи и произношения в реальных ситуациях.</p>
                  </div>
                </div>
              </Card>

              {/* Module 5 */}
              <Card className="bg-card border-primary/20 p-6 md:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-primary">Экстренные случаи</h3>
                    <p className="text-muted-foreground mb-3">
                      Потеря вещей, болезнь, помощь полиции — всё это на английском.
                    </p>
                    <p className="text-accent">👉 Важные фразы, которые могут спасти отпуск.</p>
                  </div>
                </div>
              </Card>

              {/* Module 6 */}
              <Card className="bg-card border-secondary/20 p-6 md:p-8 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Landmark className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-secondary">Туризм и развлечения</h3>
                    <p className="text-muted-foreground mb-3">
                      Покупка билетов, экскурсии, общение с гидами, музеи и парки.
                    </p>
                    <p className="text-accent">👉 Погружение в культурный контекст через язык.</p>
                  </div>
                </div>
              </Card>

              {/* Module 7 */}
              <Card className="bg-card border-primary/20 p-6 md:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-primary">Дружба в путешествиях</h3>
                    <p className="text-muted-foreground mb-3">
                      Как познакомиться с другими детьми или подростками за границей.
                    </p>
                    <p className="text-accent">👉 Игровая практика диалогов и неформального общения.</p>
                  </div>
                </div>
              </Card>

              {/* Module 8 */}
              <Card className="bg-card border-secondary/20 p-6 md:p-8 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-secondary">Дипломный проект: «Мой идеальный отпуск»</h3>
                    <p className="text-muted-foreground mb-3">
                      Ребёнок планирует воображаемое путешествие и представляет его на английском.
                    </p>
                    <p className="text-accent">👉 Развитие связной речи и творческого самовыражения.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl text-primary">Почему этот курс особенный?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-colors">
                <p className="text-foreground">
                  ✨ Акцент на <span className="text-primary">практическую, живую речь</span>, а не на грамматику ради грамматики.
                </p>
              </Card>
              <Card className="bg-card border-secondary/20 p-6 hover:border-secondary/40 transition-colors">
                <p className="text-foreground">
                  ✨ Все ситуации — из <span className="text-secondary">реальной жизни путешественника</span>.
                </p>
              </Card>
              <Card className="bg-card border-accent/20 p-6 hover:border-accent/40 transition-colors">
                <p className="text-foreground">
                  ✨ Интерактивные задания: <span className="text-accent">ролевые игры, аудиоситуации, мини-квесты</span>.
                </p>
              </Card>
              <Card className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-colors">
                <p className="text-foreground">
                  ✨ Ребёнок выходит на уровень <span className="text-primary">A2–B1 (Pre-Intermediate)</span> за курс.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Laptop className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl text-secondary">Что потребуется</h2>
            </div>
            <Card className="bg-card border-secondary/20 p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">📌</span>
                  <span className="text-foreground">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">📌</span>
                  <span className="text-foreground">Стабильный интернет и Zoom</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl text-primary">Расписание</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-primary/20 p-8 hover:border-primary/40 transition-colors">
                <div className="text-2xl mb-2 text-primary">Четверг, 15:00 (МСК)</div>
                <p className="text-muted-foreground">группа 4–5 класс</p>
              </Card>
              <Card className="bg-card border-secondary/20 p-8 hover:border-secondary/40 transition-colors">
                <div className="text-2xl mb-2 text-secondary">Пятница, 15:30 (МСК)</div>
                <p className="text-muted-foreground">группа 6–8 класс</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl text-accent">Стоимость</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 p-8 hover:border-primary/50 transition-colors">
                <div className="text-sm text-muted-foreground mb-2">Полный курс</div>
                <div className="text-4xl mb-2 text-primary">12 000 руб</div>
                <p className="text-muted-foreground">10 уроков</p>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 p-8 hover:border-secondary/50 transition-colors">
                <div className="text-sm text-muted-foreground mb-2">Абонемент</div>
                <div className="text-4xl mb-2 text-secondary">1 300 руб</div>
                <p className="text-muted-foreground">за урок</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border-primary/40 p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-secondary" />
                <span className="text-secondary">Набор открыт!</span>
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 text-primary">Места ограничены!</h2>
              <p className="text-xl text-foreground mb-4">
                Группы маленькие — максимум <span className="text-accent">6 детей</span>, чтобы каждый получил внимание.
              </p>
              <p className="text-xl text-foreground mb-8">
                👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Enroll Button Section */}
      <section id="enroll" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Button 
              className="bg-gradient-to-r from-secondary via-accent to-primary hover:from-secondary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground px-12 py-8 text-2xl shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/40 transition-all hover:scale-105"
            >
              Записаться на курс
            </Button>
            <p className="mt-6 text-muted-foreground">
              Нажмите кнопку, чтобы начать путь к свободному английскому!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Английский для путешествий. Откройте мир вместе!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
