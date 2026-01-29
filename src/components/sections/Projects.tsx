import { motion } from 'framer-motion';
import { useProjectFilter } from '../../hooks/useProjectFilter';

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

export default function Projects() {
  const {
    selectedTech,
    setSelectedTech,
    searchQuery,
    setSearchQuery,
    allTech,
    filteredProjects
  } = useProjectFilter();

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
                Projects
              </span>
            </motion.div>
            
            <motion.h2 
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              variants={itemVariants}
            >
              Featured Projects
            </motion.h2>
            
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg text-gray-300"
              variants={itemVariants}
            >
              Here are some of my recent projects that showcase my skills and experience
            </motion.p>
          </div>

          {/* Filter Controls */}
          <motion.div 
            className="mt-12 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
            variants={itemVariants}
          >
            <div className="flex flex-1 items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-lg border   py-2 pl-10 pr-3 text-sm  focus:outline-none focus:ring-1 focus:ring-brand border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-brand-soft"
                />
              </div>
              
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="rounded-lg border px-4 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-brand border-gray-600 bg-gray-800 text-white focus:border-brand-soft"
              >
                {allTech.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm  text-gray-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="card group hover:shadow-2xl"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-full flex-col">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-blue-600/20 text-brand">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2m0 0h14m-14 0a2 2 0 002 2v2a2 2 0 01-2 2" />
                        </svg>
                      </div>
                      
                      {project.period && (
                        <span className="rounded-full  px-2 py-1 text-xs font-medium  bg-gray-800 text-gray-300">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="mt-4 flex-1">
                      <h3 className="text-xl font-semibold  text-white group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="mt-2 text-sm  text-gray-100 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="chip  bg-gray-800 text-gray-100 hover:bg-brand/10 hover:text-brand transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand"></div>
                            <span className="text-xs text-gray-200">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    {project.links && project.links.length > 0 && (
                      <div className="mt-6 flex space-x-3 border-t  pt-4 border-gray-700">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-sm font-medium text-brand hover:text-brand-soft transition-colors"
                          >
                            <span>{link.label}</span>
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                variants={itemVariants}
              >
                <div className="text-gray-400">
                  <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p>No projects found matching your criteria.</p>
                  <p className="mt-1 text-sm">Try adjusting your search or filter.</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}