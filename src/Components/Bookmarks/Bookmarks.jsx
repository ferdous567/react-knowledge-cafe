import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 mb-4 bg-gray-300 ml-3 p-4">
            <div>
                <h2 className='text-3xl'>Reading Time: {readingTime} </h2>
            </div>
            <h2 className='text-3xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx}
                    bookmark={bookmark} readingTime ={readingTime}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;