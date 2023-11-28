export const getUserList = (setAllUser) => {
    fetch('https://kvsserver.onrender.com/admin/listuser')
        .then((response) => response.json())
        .then((expense_data) => setAllUser(expense_data.data));
}
export const getProductList = (setAllProduct) => {
    fetch('https://kvsserver.onrender.com/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const getMyCart = (setMyCart) => {
    fetch('https://kvsserver.onrender.com/mycart')
        .then((response) => response.json())
        .then((expense_data) => setMyCart(expense_data.data));
}
export const getAllOrders = (setAllOrders) => {
    fetch('https://kvsserver.onrender.com/admin/listallorders')
        .then((response) => response.json())
        .then((expense_data) => {

            const Orders = expense_data.data.map(order => {
                let dateArray = order.date.split('.');
                return {...order,Date:new Date(dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0])}
              })
              
            setAllOrders(Orders)
        });
}



export const addOrder = async (postData) => {
    console.log(postData);
    const res = await fetch("https://kvsserver.onrender.com/addtocart", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(postData)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const listMyCart = async (setMyCart, body) => {
    console.log(body);
    const res = await fetch("https://kvsserver.onrender.com/user/listmycart", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyCart(jsonData);
}

export const listMyUser = async (setMyUser, body) => {
    console.log(body);
    const res = await fetch("https://kvsserver.onrender.com/user/listmyuser", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyUser(jsonData);
}


export const listAllMyOrder = async (uid = {}, setMyOrder) => {
    console.log(uid);
    const body = {uid};
    const res = await fetch("https://kvsserver.onrender.com/user/listmyorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyOrder(jsonData);
}


export const deleteProduct = async (body) => {
    console.log(body);
    const res = await fetch("https://kvsserver.onrender.com/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();

    return res;
}

export const updateProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("https://kvsserver.onrender.com/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const placeOrder = async(data = {}) =>{
    console.log(data);
    const {uid} = data
    const body = {uid};
    const res = await fetch("https://kvsserver.onrender.com/user/placeorder", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const addToOrder = async (postData) => {
    console.log(postData);
    const res = await fetch("https://kvsserver.onrender.com/addtoorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(postData)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const listMyOrder = async ( body,setMyOrders) => {
    console.log(body);
    
    const res = await fetch("https://kvsserver.onrender.com/user/listmyorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyOrders(jsonData);
}



export const removefromcart = async (body) => {
    console.log(body);
    const res = await fetch("https://kvsserver.onrender.com/cart/removeone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();

    return res;
}