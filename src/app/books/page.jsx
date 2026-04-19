import BookCard from "@/component/BookCard";


const Bookspage = async() => {
    const res =await fetch('http://localhost:5000/books',{cache:'no-store'})
    const books=await res.json()
    return (
        <div className="grid grid-cols-3 gap-3">
           <h2 className="text-3xl font-bold" >Books:{books.length}</h2>
           <div>
            {
                books.map(book=><BookCard key={book.id} book={book}></BookCard>)
            }
           </div>
        </div>
    );
};

export default Bookspage;