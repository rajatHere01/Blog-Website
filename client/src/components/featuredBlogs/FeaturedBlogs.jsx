import React from 'react'
import classes from './featuredBlogs.module.css'
import mountainImg1 from '../../assets/mountain1.jpg'
import mountainImg2 from '../../assets/mountain2.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainImg1} alt=""/>
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>

                <span className={classes.category}>Nature</span>
                <div className={classes.metadata}>
                  <MdOutlinePreview /> 123 views
                </div>
                <div className={classes.metadata}>
                  <AiFillLike /> 102 likes
                </div>
                </div>
                <h4>Blog 1 title</h4>
                <p className={classes.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, in? Sunt quibusdam, perspiciatis aut consequatur amet possimus libero velit atque odio dolore officia provident eius ipsum soluta similique, laudantium dignissimos!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author:</span> Rajat
                  </span>
                  <span>
                    <span>CreatedAt:</span> 25-09-2023
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt=""/>
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi autem eaque repellat? Facilis, suscipit provident voluptatum quas natus aut, culpa enim tempore beatae optio voluptate voluptas quam praesentium nisi temporibus!
                </p>
                <div className={classes.authorAndCreatedAt}>
                    <span><span>Author:</span> Mayank</span>
                    <span><span>CreatedAt:</span> 25-03-2022</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt=""/>
              <div className={classes.secondaryBlogData}>
                <h4>Blog 3 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi autem eaque repellat? Facilis, suscipit provident voluptatum quas natus aut, culpa enim tempore beatae optio voluptate voluptas quam praesentium nisi temporibus!
                </p>
                <div className={classes.authorAndCreatedAt}>
                    <span><span>Author:</span> Shobhit</span>
                    <span><span>CreatedAt:</span> 25-03-2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs