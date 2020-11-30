import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibilityTodoList from '../containers/VisibilityTodoList'

const App = () => (
    <div>
      <AddTodo />
      <VisibilityTodoList />
      <Footer />
    </div>
)

export default App
