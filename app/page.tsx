import Image from "next/image";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import ClientReduxProvider from "./src/components/ClientReduxProvider";

export default function Home() {
  return (
    <ClientReduxProvider>
      <div className=" bg-white">
        <Header />
        <Body />
      </div>
    </ClientReduxProvider>
  );
}
