document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      {id: 1, name: 'Coffe Beans One', img: '2.jpg', price: 30000, pawal: 70000},
      {id: 1, name: 'Arabica Blend', img: '1.jpg', price: 45000, pawal: 100000}
    ]
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    }
  });
})

// Konversi mata uang ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
};