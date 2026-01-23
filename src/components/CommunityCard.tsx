import Link from 'next/link';
import Image from 'next/image';
import { Community } from '@/data/communities';

interface CommunityCardProps {
  community: Community;
}

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
        {community.image ? (
          <Image
            src={community.image}
            alt={`${community.name} community in Las Vegas`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/20 to-gold/20">
            <div className="text-center text-white/80">
              <div className="text-4xl mb-2">🏘️</div>
              <div className="text-sm font-semibold">{community.name}</div>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {community.priceRange}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
          {community.name}
        </h3>
        <p className="text-slate mb-4 line-clamp-2">
          {community.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {community.homeStyles.slice(0, 2).map((style) => (
            <span
              key={style}
              className="text-xs bg-gray-200 text-slate px-2 py-1 rounded"
            >
              {style}
            </span>
          ))}
        </div>
        <span className="text-primary font-semibold group-hover:underline">
          Explore {community.name} →
        </span>
      </div>
    </Link>
  );
}
