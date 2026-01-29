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

// Icons for different types of achievements
const getAchievementIcon = (achievement: string) => {
  if (achievement.toLowerCase().includes('problems') || achievement.toLowerCase().includes('leetcode') || achievement.toLowerCase().includes('codeforces')) {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  } else if (achievement.toLowerCase().includes('topper') || achievement.toLowerCase().includes('district')) {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  } else if (achievement.toLowerCase().includes('hackathon')) {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    );
  } else if (achievement.toLowerCase().includes('elected') || achievement.toLowerCase().includes('secretary')) {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    );
  } else {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  }
};

const getAchievementColor = (achievement: string) => {
  if (achievement.toLowerCase().includes('problems') || achievement.toLowerCase().includes('leetcode') || achievement.toLowerCase().includes('codeforces')) {
    return 'from-green-500/20 to-emerald-500/20 text-green-400';
  } else if (achievement.toLowerCase().includes('topper') || achievement.toLowerCase().includes('district')) {
    return 'from-yellow-500/20 to-amber-500/20 text-yellow-400';
  } else if (achievement.toLowerCase().includes('hackathon')) {
    return 'from-purple-500/20 to-indigo-500/20 text-purple-400';
  } else if (achievement.toLowerCase().includes('elected') || achievement.toLowerCase().includes('secretary')) {
    return 'from-blue-500/20 to-cyan-500/20 text-blue-400';
  } else {
    return 'from-brand/20 to-blue-600/20 text-brand-soft';
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
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
                Achievements
              </span>
            </motion.div>
            
            <motion.h2 
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              variants={itemVariants}
            >
              Milestones & Recognition
            </motion.h2>
            
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg text-gray-300"
              variants={itemVariants}
            >
              Key accomplishments and recognition received throughout my academic and professional journey
            </motion.p>
          </div>

          <motion.div 
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
            variants={containerVariants}
          >
            {siteData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card group hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${getAchievementColor(achievement).split(' text-')[0]}`}>
                    <div className={getAchievementColor(achievement).split(' ')[1]}>
                      {getAchievementIcon(achievement)}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-white leading-relaxed">
                      {achievement}
                    </p>
                    
                    {/* Add badges for special achievements */}
                    {achievement.toLowerCase().includes('400+') && (
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium bg-green-900/30 text-green-300">
                          Coding Excellence
                        </span>
                      </div>
                    )}
                    
                    {achievement.toLowerCase().includes('topper') && (
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium  bg-yellow-900/30 text-yellow-300">
                          Academic Excellence
                        </span>
                      </div>
                    )}
                    
                    {achievement.toLowerCase().includes('hackathon') && (
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium bg-purple-900/30 text-purple-300">
                          Innovation
                        </span>
                      </div>
                    )}
                    
                    {achievement.toLowerCase().includes('elected') && (
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300">
                          Leadership
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Stats */}
          <motion.div 
            className="mt-16 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-3xl font-bold text-brand">4+</div>
              <div className="text-sm font-medium text-gray-400">Major Achievements</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-3xl font-bold text-green-400">400+</div>
              <div className="text-sm font-medium text-gray-400">Problems Solved</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">1</div>
              <div className="text-sm font-medium text-gray-400">Hackathon Selection</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">1st</div>
              <div className="text-sm font-medium text-gray-400">District Rank</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}