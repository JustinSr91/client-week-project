// [x] Link HTML
// [x] Create all HTML elements
  // [x] <section> post container
  // [x] <img> profile image
  // [] wrap <div> around h2 and h3 elements
  // [x] <h2> post title
  // [x] <h3> date of post
  // [x] <p> text content
  // [x] <article> comment section
    // [x] <img> profile img
    // [x] <p> text content
// [x] Give elements classNames
      // body (body)
      // section element (post__container)
      // img element (profile__img)
      // h2 element (post__title)
      // h3 element (post__date)
      // p element (post__textContent)
// [x] Style HTML elements
  // [x] style section element (post__container)
  // [x] style img element (profile__img)
  // [x] style h2 element (post__title)
  // [x] style h3 element (post__date)
  // [x] style p element (post__textContent)


import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      comments: [
        {
          name: "User",
          profileImage: "styles/profile__img.jpg",
          commentDate: "Just Now",
          comment: "This is a comment",
          id: 0
        }],
    }
  },

    render() {
      return (

      // <body className="body">
        <main className="main">
          <section className="post__container">
            <img className="author__img"
                 src="styles/profile__img.jpg"></img>
            <div className="postTitleDate__div">
              <a href="#">
              <h2 className="author__name"> Instant Articles </h2>
              </a>
              <h3 className="post__date"> May 13, 2015 </h3>
            </div>
            <p className="author__textContent1"> Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android. </p>
            <p className="author__textContent2"> Learn more about this new tool for publishers at <a href="#" className="text__link"> instantarticles.fb.com. </a> </p>
          </section>


          <article className="comments__article"> {this.state.comments.map((comment, i)=>{
       return <li className="comments__div" key={i}>
              <img src= {`${comment.profileImage}`}
                   className='commentor__img'/>
                 <div className='commentor__div'>
                   <p className='commentor__name'> {comment.name} </p>
                   <p className='commentor__textContent'> {comment.comment} </p>
                 </div>
                 <article className="comment__date"> {comment.commentDate} </article>
              </li>
            })
          }
          </article>
        </main>
      // </body>
      )
    }
})
