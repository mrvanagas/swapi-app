import { Pagination } from '@mui/material'

const HomePagination = ({setPage}) => {
  
    const clickHandler = (page) => {
      setPage(page)
    }

  return (
    <Pagination count={9} onChange={(e, value) => clickHandler(value)}/>
  )
}

export default HomePagination