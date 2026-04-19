// const getPosts=async()=>{
//     const res=await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
// }

// const getPosts = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if(!res.ok){
//         throw new Error('fetch failed')
//     }
//     return res.json()
// }


const getPosts=async()=>{
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
    }
    catch(err){
        throw new Error('failed to fetch error')
        
    }
}

const Postpage =async () => {
    // const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    // const post=await res.json()
    const post=await getPosts()
    return (
        <div>
            <h2 className="text-3xl font-bold text-amber-900 ">Posts are comming:{post.length}</h2>
        </div>
    );
};

export default Postpage;