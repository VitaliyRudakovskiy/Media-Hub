'use client'

import { useSelector } from 'react-redux'

import usersSortTiles from '@/constants/usersSortTiles'
import { useAppDispatch } from '@/store/hooks'
import { selectActiveTile, setActiveTile } from '@/store/slices/searchUsersSlice'

import { Tile, UsersSortSection } from './styled'

const UsersSort = () => {
  const activeTile = useSelector(selectActiveTile)
  const dispatch = useAppDispatch()

  return (
    <UsersSortSection>
      {usersSortTiles.map(({ id, text }) => (
        <Tile
          key={id}
          onClick={() => dispatch(setActiveTile(id))}
          className={activeTile === id ? 'activeTile' : ''}
        >
          {text}
        </Tile>
      ))}
    </UsersSortSection>
  )
}

export default UsersSort
