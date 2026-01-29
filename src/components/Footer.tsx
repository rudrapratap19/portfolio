import { siteData } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile } = siteData;

  return (
    <footer className="mt-20 border-t  border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-center text-sm  text-gray-400 md:text-left">
            © {currentYear} {profile.name}. All rights reserved.
          </div>

          {/* Center - Social Links */}
          <div className="flex space-x-6">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors  text-gray-400 hover:text-brand-soft"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}