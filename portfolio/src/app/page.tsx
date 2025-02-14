interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <Container>
      <p>www</p>
      <h1>Hello</h1>
    </Container>
  );
}