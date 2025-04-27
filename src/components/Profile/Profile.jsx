import React from 'react'
import css from './Profile.module.css'


function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css['profile-card']}>
      <div className={css['profile-info']}>
        <img
          src={image}
          alt="User avatar"
          className={css['profile-image']}
        />
        <p className={css['profile-name']}>{name}</p>
        <p className={css['profile-tag']}>@{tag}</p>
        <p className={css['profile-location']}>{location}</p>
      </div>
      <ul className={css['profile-stats']}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
