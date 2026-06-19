fetch('https://jsonplaceholder.typicode.com/posts/5',
    {
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(
            {
                title:'3 roses',
                body:'The flowers are looking beautiful',
                userID:1
            }
        )
    }
)
.then(response=>response.json())
.then(data=>console.log(data));