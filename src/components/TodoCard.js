import styled from 'styled-components'
import { TodoBtn } from '../constants/style'

const TodoCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 2rem;
  background: transparent;
  border-radius: 4px;
  height: 2rem;
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  backdrop-filter: blur(4px) opacity(0%);

  &:hover {
    transform: scale(1.1);
    background: #ffffffd3;
    backdrop-filter: blur(4px) opacity(1);
  }
`
const TodoItem = styled.div`
  ${(props) =>
    props.isDone &&
    `
  color: #ccc;
  text-decoration: line-through;
  `}
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`
const TodoAction = styled.div`
  * {
    margin-left: 0.4rem;
  }
`
const TodoStatus = styled.div`
  display: inline;
  color: gray;
`

export default function TodoCard({
  todo,
  onChangeStatus,
  onDeleteTodo,
  onUpdateTodo
}) {
  return (
    <TodoCardWrapper>
      <TodoItem
        isDone={todo.isDone}
        onClick={() => {
          onChangeStatus(todo.id)
        }}
      >
        {todo.content}
      </TodoItem>
      <TodoAction>
        <TodoStatus>{todo.isDone ? '已完成' : '未完成'}</TodoStatus>
        <TodoBtn
          bgColor='darkslategray'
          onClick={() => {
            onUpdateTodo(todo.id)
          }}
        >
          編輯
        </TodoBtn>
        <TodoBtn
          bgColor='red'
          onClick={() => {
            onDeleteTodo(todo.id)
          }}
        >
          刪除
        </TodoBtn>
      </TodoAction>
    </TodoCardWrapper>
  )
}
