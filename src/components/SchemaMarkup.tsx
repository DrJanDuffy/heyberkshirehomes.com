import { SchemaMarkup } from '@/lib/schema';

interface SchemaMarkupProps {
  schemas: SchemaMarkup[];
}

export default function SchemaMarkupComponent({ schemas }: SchemaMarkupProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  );
}
