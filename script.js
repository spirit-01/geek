const list= new GoodsList();
  list.fetchGoods();
  document.querySelector('.goods-list').innerHTML=list.render();
  list.total();
  document.querySelector('.goods-total').innerHTML=list.total();
 
  