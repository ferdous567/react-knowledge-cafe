import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark }) => {
    // console.log(blog);
    const {title, cover_image, author, author_img, reading_time, posted_date,
        hashtags} = blog;
    return (
        <div className='mb-20'>
            
            <img className='h-[400px] w-full mb-3' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='h-[60px] w-[60px] rounded-full' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h4 className='text-2xl font-normal'>{author}</h4>
                        <p>{posted_date} (4 days ago)</p>
                    </div>
                </div>
                <div className=''>
                  <span>{reading_time} </span>min read.
                  <button onClick={handleAddToBookmark}
                   className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-3 mt-6'>{title}</h2>
            <p className='mt-3 mb-5 text-lg'>{hashtags}</p>
            <a href="#">Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;