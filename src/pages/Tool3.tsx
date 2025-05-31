import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Tool3 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notion</h1>
          <p className="text-lg text-gray-600">
            Универсальное рабочее пространство для заметок, задач и управления
            проектами
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
                Notion — это многофункциональная платформа, объединяющая
                заметки, базы данных, планировщик задач и вики в одном месте.
                Позволяет создавать персонализированные рабочие пространства для
                индивидуальной работы и командных проектов.
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
                  <h4 className="font-semibold">Контент</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Блочный редактор</li>
                    <li>• Базы данных</li>
                    <li>• Шаблоны страниц</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Организация</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Управление проектами</li>
                    <li>• Календари и напоминания</li>
                    <li>• Совместная работа</li>
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
                  notion.so
                </Button>
                <Button variant="outline" size="sm">
                  Notion AI
                </Button>
                <Button variant="outline" size="sm">
                  Notion Templates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tool3;
