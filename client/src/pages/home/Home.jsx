import React from 'react'
import Categories from '../../components/categories/Categories'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import classes from './home.module.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
      <div className={classes.push}>
      <Newsletter />
      <Footer />
      </div>
    </div>
  )
}

export default Home