import React from 'react'

import MenuItems from '../menuitems/menuitems.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection} from '../../redux/directory/directory.selector'
import './directorymenu.styles.scss'
const DirectoryMenu  =({sections}) =>
  (
    <div className="directory-menu">
      {
        sections.map(({ id, ...otherComponents }) => (
          <MenuItems key={id} {...otherComponents} />
        ))
      }
    </div>
  )


const mapStateToProp =   createStructuredSelector({
  sections:selectDirectorySection
})
export default connect(mapStateToProp)(DirectoryMenu)