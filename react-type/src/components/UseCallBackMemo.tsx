import React, { memo, useCallback } from "react";

const UseCallBack = () => {
  const [text, setText] = React.useState("");

  console.log("use call back");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Wrap />
    </>
  );
};

const Wrap = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  console.log("wrap");
  const toggleChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  console.log(isChecked);

  return (
    <div>
      <button onClick={toggleChecked}>wrap</button>
      <Checkbox value={isChecked} />
    </div>
  );
};

const Checkbox = memo(
  (props: any) => {
    console.log("Checkbox is renderd!");
    return <div>use call back</div>;
  },
  (prev, next) => {
    console.log(prev, next);
    return false;
  }
);

export default UseCallBack;
