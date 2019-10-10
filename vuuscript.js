const app=new Vue({
el: '#root',
data: {
items: [],
filteredItems: [],
cart: [],
query: '',
visible: true
},
methods: {
   /*handleSearchClick (){
       this.filteredItems= this.items.filter((item)=>{
           const regexp=new RegExp(this.query, 'i');
           return regexp.test(item.title);
       });
     },*/
   handleBuyClick(item) {
    fetch ('/cart', {
        method: 'POST',
        body: JSON.stringify({...item,qty:1}),
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then(()=>{
        this.cart.push({...item,qty:1});
    });
    },
    handleDeleteClick(id) {
        fetch (`//localhost:3000/cart/${id}`,{
            method: 'DELETE',
        })
        .then(()=> {
            this.cart=this.cart.filter((item)=>item.id!==id);
        })
    }
},
mounted() {
    fetch ('/goods')
    .then (response => response.json())
    .then ((goods)=> {
    this.items=goods;
    this.filteredItems=goods;
    });

    fetch ('//localhost:3000/cart')
    .then (response => response.json())
    .then ((cart)=> {
    this.cart=cart;
    });
    
},
computed: {
    total() {
        return this.cart.reduce((acc,item)=>acc+item.qty*item.price,0);
    },
    handleSearch (){
        this.filteredItems= this.items.filter((item)=>{
            const regexp=new RegExp(this.query, 'i');
            return regexp.test(item.title);
        });
    }
}
});