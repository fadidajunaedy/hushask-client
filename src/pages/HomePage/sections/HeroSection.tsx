import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full md:min-h-screen bg-secondary flex flex-col justify-center items-center">
      <div className="container grow flex flex-col justify-center py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-left md:text-center font-bold mb-4">
          Host Questions, Skip the Awkwardness
        </h1>
        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl text-left md:text-center font-bold mb-4">
          Want to know what’s on your audience’s mind?
        </h1> */}
        <p className="text-lg md:text-xl md:text-2xl lg:text-3xl text-left md:text-center text-primary/60">
          Want to know what’s on your audience’s mind? HushAsk lets you create a
          safe space for anonymous questions, cutting straight to the point.
        </p>
        <div className="flex md:justify-center items-center gap-2 mt-8">
          <Link to="/auth/login">
            <Button size="lg" className="md:text-xl md:py-6 cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="md:text-xl md:py-6 cursor-pointer"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
