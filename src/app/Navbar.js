import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export const Navbar = () => {
  const totalPosts = useSelector((state) => state.posts.length)
  return (
    <nav>
      <section>
        <h1>Redux Quick Start Example</h1>

        <div className={styles.navContent}>
          <div className={styles.navLinks}>
            <Link to="/" className="button">
              Posts
            </Link>
            <Link to="/addPost" className="button">
              Add New Post
            </Link>
          </div>
          <div>Total posts: {totalPosts}</div>
        </div>
      </section>
    </nav>
  )
}