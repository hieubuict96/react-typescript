import Header from "../../header";
import { useDispatch } from "react-redux";
import { todoAdded } from '../../../reducers/userReducer'
import Footer from "../../footer";
import UseCallBack from "../../UseCallBackMemo";

export default function Home() {
  const dispatch = useDispatch();

  console.log("home");

  return (
    <div>
      <Header />
      <button onClick={() => {
        dispatch(todoAdded(undefined))
      }}>home redux</button>
      home
      <Footer />
      <UseCallBack />
    </div>
  );
}
