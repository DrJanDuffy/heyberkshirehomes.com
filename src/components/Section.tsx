import SectionTitle from "./SectionTitle";
import Container from "./Container";

interface Props {
    id: string;
    title: string;
    description: string;
    className?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ 
    id, 
    title, 
    description, 
    className = '',
    children 
}: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className={`py-10 lg:py-20 ${className}`}>
            <Container>
                <SectionTitle>
                    <h2 className="text-center mb-4 text-3xl md:text-4xl font-bold font-display">{title}</h2>
                </SectionTitle>
                <p className="mb-12 text-center text-lg text-foreground-accent max-w-2xl mx-auto">{description}</p>
                {children}
            </Container>
        </section>
    )
}

export default Section