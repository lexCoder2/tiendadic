import { action, observable } from 'mobx';
import { Section } from '../types/section.type';

export class SectionStore {
  @observable sections: Section[] = [
    {
      key: 1,
      name: 'Productos',
      image: '/public/basket.png',
      link: ''
    },
    {
      key: 2,
      name: 'Venta',
      image: '/public/cajas.png',
      link: ''
    },
    {
      key: 3,
      name: 'Cajas',
      image: '/public/cajas.png',
      link: ''
    },
  ];

  @action
  getSections() {
    return this.sections
  }
}