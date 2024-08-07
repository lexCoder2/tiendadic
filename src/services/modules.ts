const modules = [
  {
    name: 'Ventas',
    image: '',
    routeLink: '/sales'
  },
  {
    name: 'productos',
    image: '',
    routeLink: '/products'
  },
  {
    name: 'Cajas',
    image: '',
    routeLink: '/registers'
  },



]
export function getModules() {
  return new Promise(() => {
    return modules
  })
}