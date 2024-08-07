import { Link } from 'react-router-dom';
import { ProductType } from '../../types/product.type';
import "./sectionItem.css"


export default function SectionItem({name, image, link}: ProductType) {


  return (
    <div className="section-item">
      <Link className="link" to={link}>
        <img src={image}></img>
        <h4>{name}</h4>
      </Link>
    </div>
  );
}