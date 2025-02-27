import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoSettingsOutline } from "react-icons/io5";
import { RxInput } from "react-icons/rx";
import { RiSparklingLine } from "react-icons/ri";
const whyContentArray = [
  {
    icon: IoSettingsOutline,
    title: "Full Control",
    description: "Set up your room, manage your session—quick and easy.",
  },
  {
    icon: RxInput,
    title: "Honest Input",
    description: "Anonymous questions mean you get real, unfiltered feedback.",
  },
  {
    icon: RiSparklingLine,
    title: "Versatile",
    description: "Perfect for seminars, classes, workshops, or casual chats.",
  },
];

const WhySection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="container py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-left md:text-center font-semibold mb-4 md:mb-8">
          Why Choose HushAsk?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyContentArray.map((content, index) => (
            <Card className={`${index === 0 && "md:col-span-2"} shadow-lg`}>
              <CardHeader>
                <Button size="icon" className="w-12 h-12 p-0">
                  <content.icon />
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2">
                  {content.title}
                </CardTitle>
                <CardDescription className="text-base md:text-lg lg:text-2xl">
                  {content.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
