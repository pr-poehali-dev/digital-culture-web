import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Tool2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Canva</h1>
          <p className="text-lg text-gray-600">
            Простой и доступный инструмент для создания графического контента
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
                Canva — это онлайн-платформа для графического дизайна, которая
                делает создание визуального контента доступным для пользователей
                любого уровня. Идеально подходит для социальных сетей,
                презентаций и маркетинговых материалов.
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
                  <h4 className="font-semibold">Шаблоны</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 1M+ готовых шаблонов</li>
                    <li>• Посты для соцсетей</li>
                    <li>• Презентации</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Инструменты</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Drag & Drop редактор</li>
                    <li>• Библиотека элементов</li>
                    <li>• Коллаборация</li>
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
                  canva.com
                </Button>
                <Button variant="outline" size="sm">
                  Canva Pro
                </Button>
                <Button variant="outline" size="sm">
                  Canva for Teams
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tool2;
