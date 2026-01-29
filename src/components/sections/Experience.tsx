import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-lg bg-brand/20 px-3 py-1 text-sm font-semibold text-brand ">
                Experience
              </span>
            </motion.div>
            
            <motion.h2 
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              variants={itemVariants}
            >
              Leadership & Contributions
            </motion.h2>
          </div>

          <motion.div 
            className="relative mt-12"
            variants={containerVariants}
          >
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-600/60 via-blue-400/30 to-transparent" />
            <div className="space-y-8 pl-12">
              {siteData.experience.map((exp) => (
                <motion.div
                  key={exp.role}
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -left-12 top-6 flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/40 bg-gray-950">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  </span>
                  <div className="card group hover:shadow-xl">
                    <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-brand font-medium">{exp.org}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start space-x-2">
                          <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"></div>
                          <span className="text-sm text-gray-300 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {exp.period.includes('Present') && (
                      <div className="mt-4">
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-900/30 text-green-300">
                          <div className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                          Currently Active
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}