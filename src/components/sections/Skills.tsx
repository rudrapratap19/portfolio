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

const skillCategories = [
  {
    title: 'Programming Languages',
    key: 'languages' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Mobile Development',
    key: 'mobile' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Backend & Cloud',
    key: 'backend' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    color: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    title: 'Core Expertise',
    key: 'expertise' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Libraries & Frameworks',
    key: 'libraries' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2m0 0h14m-14 0a2 2 0 002 2v2a2 2 0 01-2 2" />
      </svg>
    ),
    color: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    title: 'Tools & Version Control',
    key: 'tools' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    title: 'Course Work & Fundamentals',
    key: 'core' as keyof typeof siteData.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: 'from-amber-500/20 to-yellow-500/20'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-lg  px-3 py-1 text-sm font-semibold text-brand bg-brand/20">
                Skills
              </span>
            </motion.div>
            
            <motion.h2 
              className="mt-4 text-3xl font-bold  text-white sm:text-4xl"
              variants={itemVariants}
            >
              Technical Expertise
            </motion.h2>
            
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg  text-gray-300"
              variants={itemVariants}
            >
              A comprehensive overview of my technical skills and areas of expertise
            </motion.p>
          </div>

          <motion.div 
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="card group hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-brand`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {siteData.skills[category.key].map((skill) => (
                    <motion.span
                      key={skill}
                      className="chip  bg-gray-800 text-gray-300 hover:bg-brand/10 hover:text-brand transition-all cursor-default"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            className="mt-16 rounded-2xl bg-gradient-to-r p-8 text-center from-brand/10 to-blue-600/10"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and improving my skills. Currently focusing on advanced topics in machine learning, system design, and full-stack development.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center rounded-full  px-3 py-1 text-sm font-medium  bg-green-900/30 text-green-300">
                <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                Available for Learning
              </span>
              <span className="inline-flex items-center rounded-full  px-3 py-1 text-sm font-medium  bg-blue-900/30 text-blue-300">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                Open to Collaboration
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}