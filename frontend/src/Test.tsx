import { useEffect, useState } from "react";
import { backend_url } from "./App";
function Test() {
  const [greet, setGreet] = useState<String>();
  useEffect(() => {
    let url = backend_url + "/test/hola";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        throw Error(`Unable to fetch data from ${url}`);
      })
      .then((text) => setGreet(text));
  }, []);
  return <div>{greet}</div>;
}

export default Test;
