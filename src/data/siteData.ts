export type Link = { label: string; href: string };

export type Project = {
  title: string;
  period?: string;
  links?: Link[];
  tech: string[];
  summary: string;
  highlights: string[];
};

export type SiteData = {
  profile: {
    name: string;
    title: string;
    email: string;
    phone: string;
    links: Link[];
    summary: string;
    avatarSrc: string;
  };
  education: { 
    institute: string; 
    degree: string; 
    period: string; 
    cgpa?: string;
  }[];
  experience: { 
    role: string; 
    org: string; 
    period: string; 
    bullets: string[];
  }[];
  projects: Project[];
  skills: {
    languages: string[];
    mobile: string[];
    backend: string[];
    expertise: string[];
    libraries: string[];
    tools: string[];
    core: string[];
  };
  achievements: string[];
};

export const siteData: SiteData = {
  profile: {
    name: 'Rudra Pratap Singh',
    title: 'B.Tech AI & Data Science @ IIIT Raichur',
    email: 'rpsinghiitr@gmail.com',
    phone: '+91 7309719048',
    links: [
      { label: 'GitHub', href: 'https://github.com/rudrapratap19' },
      { label: 'LeetCode', href: 'https://leetcode.com/u/rpsinghiiitr/' },
      {label:'GeeksForGeeks', href:'https://www.geeksforgeeks.org/user/rpsinghlfb9/'},
      
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rudra-pratap-singh-677149314/' }
    ],
    summary:
      'B.Tech AI & Data Science student at IIIT Raichur (CGPA: 7.45) with strong foundation in software development, machine learning, and leadership. Experienced in Flutter & Firebase app development, mentoring teams, and managing student initiatives.',
    avatarSrc: '/src/assets/profile.jpg'
  },
  education: [
    {
      institute: 'IIIT Raichur',
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      period: 'Aug 2023 – May 2027',
      cgpa: '7.5'
    }
  ],
  experience: [
    {
      role: 'Academic Secretary, Student Affairs Council',
      org: 'IIIT Raichur',
      period: 'Aug 2024 – Oct 2025',
      bullets: [
        'Advocated exam structure benefiting 600+ students.',
        'Revived Aurora Club, reaching 70%+ participation.'
      ]
    },
    {
      role: 'Member, Placement Cell',
      org: 'IIIT Raichur',
      period: 'Jan 2025 – Oct 2025',
      bullets: [
        'Coordinated with 15+ recruiters; optimized placement processes.',
        'Reduced recruiter response time by 25%.'
      ]
    },
    {
      role: 'Teaching Assistant, Data Structures & Algorithms',
      org: 'IIIT Raichur',
      period: 'Oct 2025 – Dec 2025',
      bullets: [
        'Assisted 100+ students in understanding DSA concepts and problem-solving approaches.',
        'Conducted lab sessions and provided guidance on coding assignments.'
      ]
    },
     {
      role: 'Internship Coordinator, Training & Placement Cell',
      org: 'IIIT Raichur',
      period: 'Oct 2025 – Dec 2025',
      bullets: [
        'Coordinated internship opportunities by liaising between students and recruiters, ensuring smooth communication and timely placement support',
        'Organized and managed application processes, maintaining records and assisting students in preparing for internship selection procedures'
      ]
    },
    {
      role: 'Placement Coordinator, Training & Placement Cell',
      org: 'IIIT Raichur',
      period: 'Dec 2025 – Present',
      bullets: [
        'Coordinated placement opportunities by liaising between students and recruiters, ensuring smooth communication and timely placement support',
        'Organized and managed application processes, maintaining records and assisting students in preparing for internship selection procedures'
      ]
    }

    
  ],
  projects: [
    
    {
      title: 'Content-Based Movie Recommender',
      period: 'Jan – Apr 2025',
      links: [{ label: 'GitHub', href: 'https://github.com/rudrapratap19/content-based-movie-recommender' }],
      tech: ['Python', 'scikit-learn', 'NLP', 'TMDB'],
      summary: 'TMDB-based recommender using CountVectorizer and cosine similarity.',
      highlights: [
        'Developed in Python (Scikit-learn) using TMDB dataset of 5000 movies.',
        'Implemented NLP preprocessing, CountVectorizer, cosine similarity.'
      ]
    },
    {
      title: 'ArenaFlow (Tournament App)',
      period: 'Aug – Nov 2024',
      links: [
        { label: 'GitHub', href: 'https://github.com/rudrapratap19/ArenaFlow-main' },
        { label: 'APK', href: 'https://github.com/rudrapratap19/ArenaFlow-main/releases/download/v1.0.0/app-release.apk' }
      ],
      tech: ['Flutter', 'Firebase'],
      summary: 'Tournament management app with automated matchmaking used in 3 tournaments (100+ players).',
      highlights: [
        'Built in Flutter + Firebase with automated matchmaking.',
        'Reduced manual scheduling by 80%, used in 3 tournaments (100+ players).'
      ]
    },
    {
      title: 'CampusCare (Complaint App)',
      period: 'Jan – May 2024',
      links: [
        { label: 'GitHub', href: 'https://github.com/rudrapratap19/Campus-care' },
        { label: 'APK', href: 'https://github.com/rudrapratap19/Campus-care/releases/download/v1.0.0/college_complaint.apk' }
      ],
      tech: ['Flutter', 'Firebase', 'Push Notifications'],
      summary: 'Role-based complaint management system with push notifications.',
      highlights: [
        'Developed role-based complaint system using Flutter & Firebase.',
        'Added push notifications; reduced resolution time by 40%.'
      ]
    },
   {
      title: 'Flutter Todo Reminder App',
      period: 'Jun – Jul 2024',
      links: [
        { label: 'GitHub', href: 'https://github.com/rudrapratap19/flutter-todo-app' },
        { label: 'APK', href: 'https://github.com/rudrapratap19/flutter-todo-app/releases/download/v1.0.0/app-release.apk' }
      ],
      tech: [
        'Flutter', 
        'Dart', 
        'Supabase', 
        'Provider', 
        'Firebase', 
        'SQLite', 
        'flutter_local_notifications'
      ],
      summary: 'Feature-rich task management app with Google authentication, recurring reminders, real-time sync, and CSV export.',
      highlights: [
        'Integrated Google Sign-In with Supabase for secure authentication.',
        'Built advanced todo management with categories, priorities, deadlines, and recurrence options.',
        'Implemented push/local notifications to remind users of upcoming tasks.',
        'Enabled real-time syncing of todos via Supabase subscriptions.',
        'Added export functionality to copy todo list as CSV for easy sharing.'
      ]
    }


  ],
  skills: {
    languages: ['C', 'C++', 'Python', 'Dart', 'JavaScript'],
    mobile: ['Flutter', 'Android', 'iOS', 'Cross-platform Apps'],
    backend: ['Firebase (Auth, Firestore, RTDB)', 'Supabase', 'REST APIs','Node.js','Express.js'],
    expertise: ['Data Structures & Algorithms', 'Machine Learning', 'Data Analysis', 'Competitive Programming'],
    libraries: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Tkinter','openCV','scikit-learn'],
    tools: ['Git', 'GitHub', 'Version Control'],
    core: ['OOP', 'DBMS', 'Operating Systems', 'SDLC','Computer Networks','Computer Architecture','Data Mining and Warehousing','Artificial Intelligence','Data Science']
  },
  achievements: [
    'Solved 400+ DSA problems on LeetCode/Codeforces.',
    'District Topper (10th Standard).',
    'Selected in Smart India Hackathon 2024 - DRDO Interview Simulation Project',
    'Elected Academic Secretary, IIIT Raichur (2024-25).'
  ]
};