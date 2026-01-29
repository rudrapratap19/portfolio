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

export default function About() {
  const { profile } = siteData;

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block rounded-lg  px-3 py-1 text-sm font-semibold text-brand bg-brand/20">
              About Me
            </span>
          </motion.div>
          
          <motion.h2 
            className="mt-4 text-3xl font-bold text-white sm:text-4xl"
            variants={itemVariants}
          >
            Get to know me better
          </motion.h2>
          
          <motion.div 
            className="mx-auto mt-8 max-w-3xl"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-gray-300 ">
              {profile.summary}
            </p>
          </motion.div>

          {/* Key highlights */}
          <motion.div 
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            <motion.div 
              className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center dark:from-blue-900/20 dark:to-blue-800/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
              <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">Major Projects</div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-center dark:from-green-900/20 dark:to-green-800/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">5+</div>
              <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">Leadership Roles</div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center dark:from-purple-900/20 dark:to-purple-800/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">600+</div>
              <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">Students Helped</div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center dark:from-orange-900/20 dark:to-orange-800/20"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">400+</div>
              <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">DSA Problems</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}