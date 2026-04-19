export default function CtaBand() {
  return (
    <div style={{
      background: 'var(--yellow)',
      padding: '48px 60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '4px solid var(--black)',
      flexWrap: 'wrap',
      gap: 24,
    }}>
      <div>
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.5)',
          marginBottom: 6,
        }}>
          Ready to eat?
        </div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(36px,4vw,56px)',
          letterSpacing: 2,
          lineHeight: 1,
          color: 'var(--black)',
        }}>
          ORDER NOW.<br />
          <span style={{ color: 'var(--red)' }}>PICK UP IN 10.</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="#combos" className="btn-primary" style={{ fontSize: 20, padding: '18px 40px' }}>
          ORDER ONLINE →
        </a>
        <a
          href="#visit"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 20,
            letterSpacing: 2,
            padding: '18px 32px',
            background: 'var(--black)',
            color: 'var(--yellow)',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          FIND US →
        </a>
      </div>
    </div>
  )
}
