import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Цифровая культура в профессиональной деятельности
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Исследование современных инструментов для создания цифрового контента.
          Изучайте классификацию онлайн-сервисов и их возможности для
          профессионального развития.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/classification">
            <Button size="lg" className="px-8">
              Изучить инструменты
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="px-8">
            Подробнее о проекте
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
