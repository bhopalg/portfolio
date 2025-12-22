import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — DESIGNED & BUILT WITH PRECISION
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            REACT + TYPESCRIPT
          </p>
        </div>
      </Container>
    </footer>
  );
}
