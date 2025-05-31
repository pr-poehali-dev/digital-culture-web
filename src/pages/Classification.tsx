import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Classification = () => {
  const toolCategories = [
    {
      title: "Дизайн и прототипирование",
      tools: ["Figma", "Sketch", "Adobe XD", "InVision"],
      icon: "Palette",
      color: "bg-blue-500",
    },
    {
      title: "Графический дизайн",
      tools: ["Canva", "Adobe Photoshop", "GIMP", "Pixlr"],
      icon: "Image",
      color: "bg-green-500",
    },
    {
      title: "Управление контентом",
      tools: ["Notion", "Airtable", "Trello", "Miro"],
      icon: "FileText",
      color: "bg-purple-500",
    },
    {
      title: "Видео и анимация",
      tools: ["Loom", "Camtasia", "After Effects", "Lottie"],
      icon: "Video",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Классификация инструментов
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Современные онлайн-сервисы для создания цифрового контента,
            организованные по категориям назначения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {toolCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon
                      name={category.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classification;
