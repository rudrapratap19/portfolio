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

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
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
                Education
              </span>
            </motion.div>
            
            <motion.h2 
              className="mt-4 text-3xl font-bold  text-white sm:text-4xl"
              variants={itemVariants}
            >
              Academic Journey
            </motion.h2>
          </div>

          <motion.div 
            className="mt-12 space-y-6"
            variants={containerVariants}
          >
            {siteData.education.map((edu, index) => (
              <motion.div
                key={edu.institute}
                className="card group hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/20 text-brand ">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {edu.institute}
                        </h3>
                        <p className="text-gray-300">{edu.degree}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start space-y-2 md:items-end">
                    <span className="inline-flex items-center rounded-full  px-3 py-1 text-sm font-medium text-blue-300 bg-blue-900/30 ">
                      {edu.period}
                    </span>
                    {edu.cgpa && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-400 ">CGPA:</span>
                        <span className="rounded-lg px-2 py-1 text-sm font-bold  bg-green-900/30 text-green-300">
                          {edu.cgpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress indicator for current education */}
                {index === 0 && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 ">
                      <span>Progress</span>
                      <span>Year 3/4</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-700 ">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand to-blue-600"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}