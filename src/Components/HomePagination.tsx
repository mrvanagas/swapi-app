import { Pagination } from '@mui/material'

const HomePagination = ({setPage}) => {
  
    const clickHandler = (page: number) => {
      setPage(page)
    }

  return (
    <Pagination sx={{ marginLeft: '23rem', paddingTop: '2rem' }} count={9} onChange={(e, value) => clickHandler(value)}/>
  )
}

export default HomePagination