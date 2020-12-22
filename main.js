const app = new Vue({
  el: '#app',
  data: {
      books: [
          {id: 0, name:'《算法导论》', date: '2006-9', price: 85, count: 1},
          {id: 1, name:'《python》', date: '2004-10', price: 15, count: 1},
          {id: 2, name:'《JS》', date: '2002-1', price: 41, count: 1},
          {id: 3,name:'《代码大全》', date: '2012-8', price: 123, count: 1},
      ],
      totalPrice: 0,
  },
  computed: {
      getTotalPrice() {
          let totalPrice = 0;
          // 1、普通for循环
          // for(let i=0; i < this.books.length; i++){
          //     totalPrice += this.books[i].price*this.books[i].count
          // }

          // 2、for(let i in this.books)
          // for(let i in this.books) {
          //     totalPrice += this.books[i].price*this.books[i].count
          // }

          // 2、for(let item of this.books)
          // for(let item of this.books) {
          //     totalPrice += item.price*item.count
          // }

          // 3、reduce((start, n) => start+n, initValue)
          // totalPrice = this.books.reduce((start, item) => start.price*start.count+item.price*item.start)
          totalPrice = this.books.reduce((start, book) => start+book.price * book.count, 0)

          this.totalPrice = totalPrice
          return totalPrice
      }
  },
  filters: {
      showPrice(price) {
          return '¥' + Number(price).toFixed(2)
      }
  },
  methods: {
      addBtn(row) {
          row.count++
      },
      subBtn(row) {
          if(row.count !== 1) {
              row.count--
              return
          }
      },
      removeBtnById(id) {
          this.books.splice(id, 1)
      }
  }
})