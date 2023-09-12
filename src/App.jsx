
import Header from './Components/Header/Header';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    // console.log('marking as read', time);
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);
  }

  return (
    <>
     
        <Header></Header>
        <div className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks}
        readingTime={readingTime}></Bookmarks>
        </div>
      
      
    </>
  )
}

export default App
