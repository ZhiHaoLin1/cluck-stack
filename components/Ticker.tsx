const items = [
  'CRISPY FRIED CHICKEN',
  'GOLDEN BELGIAN WAFFLES',
  'HOUSEMADE MAPLE BUTTER',
  'SPICY HONEY DRIZZLE',
  'OPEN DAILY 8AM–10PM',
  'FREE REFILLS ON DRINKS',
  'DINE IN · TAKEOUT · DELIVERY',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item} <span className="ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
