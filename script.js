
const goods = [
    { title: 'футболка', price: 500 },
    { title: 'носки', price: 50 },
    { title: 'трусы', price: 350 },
    { title: 'джинсы', price: 2000 },
    {  price: 200 },
    { title: 'куртка' }
  ];
  
  const renderGoodsItem = ({title="нет товара",price="цена уточняется"}) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = list => {
    let goodsList = list.map(renderGoodsItem);
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);
  