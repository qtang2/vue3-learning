//vue does not use semicolons
// console.log('hello, vue')
const app = Vue.createApp({
    //data and functions go here
    // template:'<h2>Here is the h2 in template<h2>'
    data(){
        return {
            url:'heep://www.thenetninja.co.uk',
            title: 'The Final Empire',
            author:'Brandon',
            age: 45,
            showBooks:true,
            X:0,
            Y:0,
            books:[
                {title:"name of the wind", author:"Brandson",img:'assets/1.jpg',isFav:true},
                {title:"the way of kings", author:"Bran dson",img:'assets/2.jpg',isFav: false},
                {title:"the final empire", author:"Brandson",img:'assets/3.jpg',isFav:true},
            ]
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter(book => book.isFav)
        }
    },
    //computed property is a way to define a data proterty in out component which depends on other data that predefined in this component   

    methods:{
        changeTitle(title){
            console.log('clicked')
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            console.log(book)
            book.isFav = ! book.isFav
        },

        //e is the first arg passed in automatically when an event fire if there is no other args passed in
        //if there is other args passed in, need to explicityly saying $event
        handleEvent(e,data){
            console.log(e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.X = e.offsetX
            this.Y = e.offsetY
        }
    }
    
})

app.mount('#app')