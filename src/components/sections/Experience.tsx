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
            className="mt-12 grid gap-8 lg:grid-cols-2"
            variants={containerVariants}
          >
            {siteData.experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="card group hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-brand from-brand/30 to-blue-600/30">
                    {index === 0 && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m14 0V9a2 2 0 00-2-2M9 7h6m-6 4h6m-6 4h6" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-brand font-medium">{exp.org}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full  px-3 py-1 text-sm font-medium  bg-gray-800 text-gray-200">
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

                    {/* Add a "Current" badge for ongoing roles */}
                    {exp.period.includes('Present') && (
                      <div className="mt-4">
                        <span className="inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium  bg-green-900/30 text-green-300">
                          <div className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                          Currently Active
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}