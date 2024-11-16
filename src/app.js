document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      {id: 1, name: 'Coffe Beans One', img: '2.jpg', price: 30000},
      {id: 1, name: 'Coffe Beans One', img: 'produk.jpg', price: 45000}
    ]
  }))
})