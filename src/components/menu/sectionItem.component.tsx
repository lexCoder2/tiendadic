import { NavLink } from 'react-router-dom';
import { SectionType } from '../../types/section.type';
import "./sectionItem.scss"
import { useState } from 'react';


export default function SectionItem({name, image, link}: SectionType) {
  const [active, setActive ] = useState('')
  const classChange = ({isActive}: {isActive: boolean}) => {
    setActive(isActive ? 'active': '')
    return 'link'
  }
  return (
    <div className={`section-item ${active}`} >
      <NavLink className={classChange} to={link}>
        <img src={image}></img>
        <h4>{name}</h4>
      </NavLink>
    </div>
  );
}