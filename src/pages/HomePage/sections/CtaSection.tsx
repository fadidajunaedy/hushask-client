import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="w-full min-h-[50vh] bg-primary text-white flex flex-col justify-center items-center">
      <div className="container flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-left md:text-center font-semibold">
          Unlock New Conversations
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-left md:text-center mb-4">
          Don’t let your audience stay silent. With HushAsk, hear the voices
          that usually stay hidden. Try it now and feel the difference!
        </p>
        <Link to="/auth/login" className="text-left md:text-center">
          <Button
            variant="secondary"
            size="lg"
            className="md:text-xl md:py-6 cursor-pointer text-left md:text-center"
          >
            Create Your First Room
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
