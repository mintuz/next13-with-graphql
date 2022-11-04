import { use } from "react";
import { getUserById } from "../lib/user";

export default function Home() {
  const { data: userData } = use(getUserById("FAKE_ID"));
  return (
    <main>
      <h1>Hello {userData?.user.name}</h1>
    </main>
  );
}
