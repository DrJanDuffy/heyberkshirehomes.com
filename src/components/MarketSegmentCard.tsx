import Link from 'next/link';

interface MarketSegmentCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function MarketSegmentCard({
  title,
  description,
  href,
  icon,
}: MarketSegmentCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-foreground-accent mb-4">{description}</p>
      <span className="text-primary font-semibold group-hover:underline">
        Learn More →
      </span>
    </Link>
  );
}
