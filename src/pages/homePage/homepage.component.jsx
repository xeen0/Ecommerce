import React from 'react';

import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory-menu/directorymenu.component'
const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu/>
    </div>
);

export default HomePage;