
//物件陣列 map, filter
function App(){
    //物件陣列
    const items1=[
        {id:1 ,name:'apple',price:20},
        {id:2 ,name:'Banana',price:30},
        {id:3 ,name:'Orange',price:40}
    ]
    //陣列過濾
    const fillterItems = items1.filter((item)=>{
                                    return item.price>25;}
    )
    //陣列map
    const items2 = fillterItems.map((item,index) => (
                <div key={item.id}>
                    index= {index}, id= {item.id}, name={item.name} ,price={item.price}
                </div>
     ));
     
    
     return (
        <>
          <h1>過濾後價格大於 25 的水果：</h1>
          {items2}
        </>
      );
}

export default App;