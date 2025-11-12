import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, User, Users } from 'lucide-react';
import { BsGear } from 'react-icons/bs';


const WhyChooseUsSection = () => {
  return (
    <section className="py-32 bg-[var(--primary)]/5 relative overflow-hidden">
        <BsGear className="absolute top-[10vw] -left-20 text-[20vw] spin-slow text-[var(--primary)]/15" />
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1), transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 30%)
          `,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Team Photos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pl-[10vw] z-20 md:block hidden"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Team Member"
                className="w-40 h-40 absolute top-[-10vw] rounded-xl shadow-lg object-cover border-4 border-white/20"
              />
          
            </div>

            <div className="relative">
              <img
                src="https://i.imgur.com/tLbf0Lz.png"
                alt="Team Member"
                className="w-40 h-40 absolute top-[-4vw] left-[5vw] rounded-xl shadow-lg object-cover border-4 border-white/20"
              />
            
            </div>

            <div className="relative">
              <img
                src="https://i.imgur.com/HO52qyp.png"
                alt="Team Member"
                className="w-40 h-40 rounded-xl top-[3vw] absolute shadow-lg object-cover border-4 border-white/20"
              />
             
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className='relative'>
              <h2 className="md:text-[4vw] text-4xl text-[var(--primary)] font-bold ">Why choose us</h2>
              <div className='absolute md:w-[45vw] w-[90vw] right-[2vw] h-[2px] bg-[var(--primary)] ' />
              <div className='absolute w-[2px] md:h-[20vw] h-[101vw] left-[-2vw] top-[50px] bg-[var(--primary)] ' />
              <p className=" leading-relaxed mt-2">
                Your Trusted Partner in Financial Success. With Expertise in Tax and Economics, We're Here to Guide You Towards Prosperity.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
              {[
                {
                  title: "Expertise",
                  description: "Benefit from our seasoned team's wealth of experience and specialized knowledge, ensuring precise and effective financial guidance.",
                  icon: User,
                },
                {
                  title: "Personalized Service",
                  description: "Enjoy tailored solutions crafted with your unique needs in mind, guaranteeing individualized attention and strategies aligned with your goals.",
                  icon: Users,
                },
                {
                  title: "Forward Thinking",
                  description: "Access cutting-edge solutions and forward-thinking strategies that maximize your financial potential, staying ahead in an ever-evolving landscape.",
                  icon: TrendingUp,
                },
                {
                  title: "Proven Results",
                  description: "Trust in our track record of success, with a history of delivering tangible outcomes and satisfied clients who've achieved their financial aspirations with us.",
                  icon: CheckCircle,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 border-b border-[var(--secondary)]"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ">
                    <feature.icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold  mb-2">{feature.title}</h3>
                    <p className=" text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;