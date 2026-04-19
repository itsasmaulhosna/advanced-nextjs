export const generateStaticParams=async()=>{
    const res =await fetch('http://localhost:5000/books')
    const books=await res.json()
    return books.map(book=>({bookId:book.id}))
}


const BookDetails = async({params}) => {
    const {bookId}= await params
    const res =await fetch(`http://localhost:5000/books/${bookId}`)
const {title,author,price}=await res.json()
    return (
        <div>
            <h2 className='text-3xl font-bold'>Book Details:{bookId}</h2>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{author}</p>
        </div>
    );
};

export default BookDetails;