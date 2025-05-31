import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DeveloperInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="User" size={32} className="text-primary" />
            </div>
            <CardTitle className="text-2xl">О разработчике</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Студент группы ЭМО-21а</strong>
            </p>
            <p className="text-gray-600">
              Проект выполнен в рамках изучения дисциплины "Цифровая культура в
              профессиональной деятельности"
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <div className="flex items-center text-gray-600">
                <Icon name="Calendar" size={16} className="mr-2" />
                2024
              </div>
              <div className="flex items-center text-gray-600">
                <Icon name="Code" size={16} className="mr-2" />
                React + TypeScript
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperInfo;
