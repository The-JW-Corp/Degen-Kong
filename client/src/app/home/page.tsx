import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      Degenkong
      <Link href="/rarity">Rarity page</Link>
      <Button text="home" />
      <Button text="stake" />
      <Button text="rarity" />
    </>
  );
}
