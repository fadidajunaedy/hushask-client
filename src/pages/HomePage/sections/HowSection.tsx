import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoSettingsOutline } from "react-icons/io5";
import { RiSparklingLine } from "react-icons/ri";
import PlaceholderImage from "@/assets/placeholder.jpg";
const whyContentArray = [
  {
    icon: IoSettingsOutline,
    title: "Sign up and log in to HushAsk.",
  },
  {
    icon: IoSettingsOutline,
    title: "Create a room for your session in seconds.",
  },
  {
    icon: RiSparklingLine,
    title: "Share the access code with your audience.",
  },
  {
    icon: RiSparklingLine,
    title: "Receive questions in real-time—no hesitation, no fuss.",
  },
];

const HowSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="container grid grid-cols-1 md:grid-cols-3 py-8 md:py-16">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-left font-semibold mb-4 md:mb-8">
            How It Works
          </h2>
        </div>
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 items-start md:items-stretch gap-4">
          {whyContentArray.map((content, index) => (
            <Card
              className={`sm:aspect-square ${
                (index + 1) % 2 === 0 ? "lg:translate-y-4" : "lg:-translate-y-4"
              } relative shadow-lg`}
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-xl lg:text-2xl text-left">
                  {index + 1}. {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="sm:mt-auto">
                <img
                  src={PlaceholderImage}
                  className="aspect-video rounded-2xl"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSection;
