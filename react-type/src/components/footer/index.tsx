import { useMemo, useState, useCallback } from "react";

export default function Footer() {
  const [use, setUse] = useState(1);

  const r = useMemo(() => {
    console.log("use memo");
    return 1;
  }, [1]);

  console.log(r);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setUse(use + 1);
          }}
        >
          footer button
        </button>
      </div>
    </>
  );
}
