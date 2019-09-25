
 
  class GoodsItem {
    constructor(title,price) {
      this.title=title;
      this.price=price;
    }
    render () {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
  }
 
  class GoodsList{
    constructor() {
      this.goods=[];
    }
    fetchGoods() {
      this.goods=[
        { title: 'футболка', price: 500 },
        { title: 'носки', price: 50 },
        { title: 'трусы', price: 350 },
        { title: 'джинсы', price: 2000 },
      ];
    }
    render() {
     return this.goods.map(good=>new GoodsItem(good.title,good.price).render()).join('');
    }
  }

  const list= new GoodsList();
  list.fetchGoods();
  document.querySelector('.goods-list').innerHTML=list.render();