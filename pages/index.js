import Container from '@/components/container';
import Hero from '@/components/hero';

export default function Home() {
  const subtitle = 'アウトプットしていくサイト';

  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
