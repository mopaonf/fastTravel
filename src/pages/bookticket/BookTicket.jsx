import React from 'react'
import Search from '../search/Search'
import Category from '../home_container/category/Category'
import Offer from '../home_container/offer/Offer'

const BookTicket = () => {
  return (
    <div className='mt-10'>
    <Search />
      {/* <Category /> */}
    <Offer />
    </div>
  )
}

export default BookTicket