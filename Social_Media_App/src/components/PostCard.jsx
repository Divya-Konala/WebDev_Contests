import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/PostCard.css'

const ReadMore = (props) => {
    const text = props.children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.toString().slice(0, 50) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

const PostCard = ({item}) => {
    return(
        <div className='card' key={item.id}>
          <Link to={`/item/${item.id}`} >
          <img src={`https://picsum.photos/200?random=${item.id}`} alt="" />
          <p>User ID: {item.id}</p>
          <p>Title: {item.title}</p>
          </Link>
          <span>{`Body: `}</span>
          <ReadMore>
           {item.body}
          </ReadMore>
        </div>
      )
}

export default PostCard