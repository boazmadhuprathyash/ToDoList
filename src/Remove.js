import React, { useReducer } from 'react'
import { View } from 'react-native'

import Title from './Title';
import Input from './Input';
import List from './List';
//import { actionCreators, reducer, initialState } from './src/todos'
const randomId = () => Math.random().toString()

const createItem = (title) => ({ id: randomId(), title })

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

export const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createItem(title) }),
  remove: (id) => ({ type: types.REMOVE, payload: id }),
}

export const initialState = {
  items: [
    createItem('Click to remove'),
    createItem('Learn React Native'),
    createItem('Write Code'),
    createItem('Ship App'),
  ],
}

export function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return { ...state, items: [...state.items, action.payload] }
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
  }
}

export default function Remove() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View>
      <Title>To-Do List</Title>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  )
}
