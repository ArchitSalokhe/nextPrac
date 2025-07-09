export default function CryptoList({ coins }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Coin</th>
          <th style={{ textAlign: 'right', borderBottom: '1px solid #ccc' }}>Price</th>
          <th style={{ textAlign: 'right', borderBottom: '1px solid #ccc' }}>Market Cap</th>
          <th style={{ textAlign: 'right', borderBottom: '1px solid #ccc' }}>24h Change</th>
        </tr>
      </thead>
      <tbody>
        {coins.map(coin => (
          <tr key={coin.id}>
            <td style={{ padding: '0.5rem 0' }}>
              <img src={coin.image} alt={coin.name} style={{ width: '25px', verticalAlign: 'middle', marginRight: '8px' }} />
              {coin.name} ({coin.symbol.toUpperCase()})
            </td>
            <td style={{ textAlign: 'right' }}>${coin.current_price.toLocaleString()}</td>
            <td style={{ textAlign: 'right' }}>${coin.market_cap.toLocaleString()}</td>
            <td style={{ textAlign: 'right', color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
