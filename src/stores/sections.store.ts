import { SectionType } from '../types/section.type';

export class SectionStore {
  sections: SectionType[] = [
    {
      key: 1,
      name: 'Productos',
      image: '/public/basket.png',
      link: 'products'
    },
    {
      key: 2,
      name: 'Venta',
      image: '/public/shop.png',
      link: 'sell'
    },
    {
      key: 3,
      name: 'Cajas',
      image: '/public/cajas.png',
      link: 'registers'
    },
  ];

  
  getSections() {
    return this.sections
  }
}