import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-concrete-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Monomorium Minimum
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-foreground">
              At MONOMORIUM MINIMUM, we specialize in providing top-notch construction services, including residential and commercial projects, elevation designs, renovations, and remodeling. With years of experience, we take pride in delivering high-quality work that meets the unique needs of each client.
              <br /><br />
              Whether you're looking to enhance the look of your building with a new elevation, transform an interior space, or manage a full-scale construction project, our skilled team is dedicated to bringing your vision to life. We focus on quality, reliability, and customer satisfaction, ensuring every project is completed on time, within budget, and to your exact specifications.
              <br /><br />
              ER. Gokul Nandan B.E, M.Tech, LLB<br />
              Founder & Principal Engineer<br />
              With a distinguished background in engineering and law, ER. Gokul Nandan leads Monomorium Minimum with a commitment to excellence, innovation, and client satisfaction. His expertise spans residential and commercial construction, project management, and legal compliance, ensuring every project is delivered to the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;