import DinamicProductCard from "@/components/dinamicProductCard";
import StaticProductCard from "@/components/staticProductCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <section className="flex gap-20 w-full justify-center">
        <DinamicProductCard/>
        <StaticProductCard/>
      </section>
    </main>
  );
}
