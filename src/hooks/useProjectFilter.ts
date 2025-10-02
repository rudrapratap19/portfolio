import { useMemo, useState } from 'react';
import { siteData } from '../data/siteData';

export function useProjectFilter() {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Generate list of all unique technologies from projects
  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    siteData.projects.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on selected technology and search query
  const filteredProjects = useMemo(() => {
    return siteData.projects.filter((project) => {
      // Filter by technology
      const matchesTech = selectedTech === 'All' || project.tech.includes(selectedTech);
      
      // Filter by search query (case-insensitive)
      const query = searchQuery.toLowerCase();
      const matchesQuery = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tech.join(' ').toLowerCase().includes(query) ||
        project.highlights.join(' ').toLowerCase().includes(query);
      
      return matchesTech && matchesQuery;
    });
  }, [selectedTech, searchQuery]);

  return {
    selectedTech,
    setSelectedTech,
    searchQuery,
    setSearchQuery,
    allTech,
    filteredProjects
  };
}