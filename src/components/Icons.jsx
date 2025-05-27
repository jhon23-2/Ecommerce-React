export function CartIcon({ setShowCart, cart }) {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      onClick={() => setShowCart(true)}
      aria-label="Ver carrito"
    >

      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009688"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "middle" }}
      >
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="19" cy="21" r="1.5" />
        <path d="M2.5 3h2l2.7 13.39a2 2 0 0 0 2 1.61h7.6a2 2 0 0 0 2-1.61L21.5 6H6" />
      </svg>

      {cart.length > 0 && (
        <span className="cart-badge">{cart.length}</span>
      )}

    </button>
  )
}

export function DeleteIcon({ handlerRemove }) {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      aria-label="Ver carrito"
      onClick={handlerRemove}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f44336"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "middle", cursor: "pointer" }}
      >
        <rect x="3" y="6" width="18" height="15" rx="2" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
        <line x1="4" y1="6" x2="20" y2="6" />
      </svg>
    </button>

  );
}

export function AddStockIcon({ handlerQuantity }) {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      aria-label="Ver carrito"
      onClick={handlerQuantity}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009688"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "middle", cursor: "pointer" }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </button>

  );
}

export function RemoveStockIcon({ handlerRemoveStock }) {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      aria-label="Ver carrito"
      onClick={handlerRemoveStock}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f44336"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "middle", cursor: "pointer" }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </button>

  );
}

export function UserIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#009688"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "middle" }}
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.3137 3.134-6 8-6s8 2.6863 8 6" />
    </svg>
  );
}

export function ConfigIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#009688"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "middle" }}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function AddToCartIcon({ handlerAddToCart }) {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      aria-label="Add to cart"
      onClick={handlerAddToCart}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009688"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "middle", cursor: "pointer" }}
      >
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="19" cy="21" r="1.5" />
        <path d="M2.5 3h2l2.7 13.39a2 2 0 0 0 2 1.61h7.6a2 2 0 0 0 2-1.61L21.5 6H6" />
        <line x1="12" y1="10" x2="12" y2="16" />
        <line x1="9" y1="13" x2="15" y2="13" />
      </svg>
    </button>
  );
}


export function RemoveFromCartIcon({ handlerRemoveCart }) {
  return (
    <button
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      aria-label="Remove from cart"
      onClick={handlerRemoveCart}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f44336"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "middle", cursor: "pointer" }}
      >
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="19" cy="21" r="1.5" />
        <path d="M2.5 3h2l2.7 13.39a2 2 0 0 0 2 1.61h7.6a2 2 0 0 0 2-1.61L21.5 6H6" />
        <line x1="9" y1="13" x2="15" y2="13" />
      </svg>
    </button>
  );
}