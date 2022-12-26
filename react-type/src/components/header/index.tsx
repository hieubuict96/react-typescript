import { useSelector } from 'react-redux';

export default function Header() {
  const user = useSelector((s:any) => s.todos.a)

  console.log("header");

  return (
    <div>Header</div>
  )
}