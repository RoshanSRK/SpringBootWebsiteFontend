fetch('http://localhost:8092/api/v1/user/mobilephones').then((data)=>{
    return data.json();
}).then((completedata) =>{
    let data1 ="";
    completedata.map((values)=>{
        data1 += `<div class="box">
        <div class="image">
            <img class="product-image" src="../${values.productImage1}" alt="">
            <div class="icons">
                <button class="heart-btn fas fa-heart" ></button>
                <button class="cart-btn"> Add to cart </button>
                <a href="specificProduct.php?productId=${values.productId}" class="fas fa-angle-double-right"></a>
            </div>
        </div>
        <div class="content">
             <h3>${values.productName}</h3>
             <span class="price"> Rs ${values.productPrice}</span> 
        </div>
    </div>`
    });
    document.getElementById("box-containerM").innerHTML = data1;

}).catch((err)=>{
    console.log(err);
})

// wearables
fetch('http://localhost:8092/api/v1/user/wearables').then((dataW)=>{
    return dataW.json();
}).then((completedata2) =>{
    let data2 ="";
    completedata2.map((valuesW)=>{
        data2 += `<div class="box">
        <div class="image">
            <img class="product-image" src="../${valuesW.productImage1}" alt="">
            <div class="icons">
                <button class="heart-btn fas fa-heart" ></button>
                <button class="cart-btn"> Add to cart </button>
                <a href="specificProduct.php?productId=${valuesW.productId}" class="fas fa-angle-double-right"></a>
            </div>
        </div>
        <div class="content">
             <h3>${valuesW.productName}</h3>
             <span class="price"> Rs ${valuesW.productPrice}</span> 
        </div>
    </div>`
    });
    document.getElementById("box-containerW").innerHTML = data2;

}).catch((err)=>{
    console.log(err);
})
// chargers
fetch('http://localhost:8092/api/v1/user/chargers').then((dataC)=>{
    return dataC.json();
}).then((completedata3) =>{
    let data3 ="";
    completedata3.map((valuesC)=>{
        data3 += `<div class="box">
        <div class="image">
            <img class="product-image" src="../${valuesC.productImage1}" alt="">
            <div class="icons">
                <button class="heart-btn fas fa-heart" ></button>
                <button class="cart-btn"> Add to cart </button>
                <a href="specificProduct.php?productId=${valuesC.productId}" class="fas fa-angle-double-right"></a>
            </div>
        </div>
        <div class="content">
             <h3>${valuesC.productName}</h3>
             <span class="price"> Rs ${valuesC.productPrice}</span> 
        </div>
    </div>`
    });
    document.getElementById("box-containerC").innerHTML = data3;

}).catch((err)=>{
    console.log(err);
})

// others
fetch('http://localhost:8092/api/v1/user/other').then((dataO)=>{
    return dataO.json();
}).then((completedata4) =>{
    let data4 ="";
    completedata4.map((valuesO)=>{
        data4 += `<div class="box">
        <div class="image">
            <img class="product-image" src="../${valuesO.productImage1}" alt="">
            <div class="icons">
                <button class="heart-btn fas fa-heart" ></button>
                <button class="cart-btn"> Add to cart </button>
                <a href="specificProduct.php?productId=${valuesO.productId}" class="fas fa-angle-double-right"></a>
            </div>
        </div>
        <div class="content">
             <h3>${valuesO.productName}</h3>
             <span class="price"> Rs ${valuesO.productPrice}</span> 
        </div>
    </div>`
    });
    document.getElementById("box-containerO").innerHTML = data4;

}).catch((err)=>{
    console.log(err);
})