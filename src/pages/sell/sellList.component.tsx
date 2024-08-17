import { observer } from 'mobx-react'
import { Box } from '../../components/box.component'
import { SellTicketType } from '../../types/sellTicket.type'
import { SellItem } from './sellItem.component'
import { useStore } from '../../useStore'
import { useEffect } from 'react'

function SellListView({ list }: { list: SellTicketType }) {
  const { sellStore } = useStore()
  useEffect(() => {
    sellStore.addProduct(1)
  }, [sellStore])
  return (
    <Box className="no-padding">
      <ul className="sell-list-items">
        {list.items.map((item, index) => (
          <SellItem key={index} item={item} />
        ))}
      </ul>
    </Box>
  )
}

const SellList = observer(SellListView)
export default SellList
