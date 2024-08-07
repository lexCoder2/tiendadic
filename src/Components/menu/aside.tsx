import { observer } from 'mobx-react'
import { useContext } from 'react'
import { StoreContext } from '../../store.context'
import SectionItem from './sectionItem.component'
import './aside.css'

function AsideView() {
  const { sectionsStore } = useContext(StoreContext) 
  const sections = sectionsStore.getSections();
  return (

    <aside className='aside'>
      {
        sections.map(({name, key, image, link}) => {
          return <SectionItem 
            key={key} 
            name={name} 
            image={image} 
            link={link}
          ></SectionItem>
        })
      }

    </aside>
  )

}
export const Aside = observer(AsideView)