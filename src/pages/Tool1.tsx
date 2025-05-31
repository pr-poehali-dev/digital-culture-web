import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Tool1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Figma</h1>
          <p className="text-lg text-gray-600">
            Профессиональный инструмент для UI/UX дизайна и прототипирования
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Target" className="mr-2" />
                Назначение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Figma — это облачная платформа для дизайна интерфейсов, которая
                позволяет командам совместно работать над созданием веб-сайтов,
                мобильных приложений и других цифровых продуктов в режиме
                реального времени.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Zap" className="mr-2" />
                Основные возможности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Дизайн</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Векторная графика</li>
                    <li>• Компоненты и библиотеки</li>
                    <li>• Автолейауты</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Прототипирование</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Интерактивные прототипы</li>
                    <li>• Анимации и переходы</li>
                    <li>• Тестирование UX</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Globe" className="mr-2" />
                Примеры сервисов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  figma.com
                </Button>
                <Button variant="outline" size="sm">
                  FigJam
                </Button>
                <Button variant="outline" size="sm">
                  Figma Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tool1;
