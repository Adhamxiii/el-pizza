import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center" id='about'>
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <div className="mx-auto mt-4 flex max-w-4xl flex-col gap-4 text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            laudantium ullam itaque incidunt. Neque corporis debitis, cupiditate
            ipsam doloremque at qui veniam, autem provident saepe cumque fugit,
            vero delectus rem!
          </p>
          <p>
            Neque corporis debitis, cupiditate ipsam doloremque at qui veniam,
            autem provident saepe cumque fugit, vero delectus rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit nihil incidunt eveniet, aut id vel autem, corporis
          </p>
        </div>
      </section>
      <section className="my-8 text-center" id="contact">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="mt-8">
          <Link
            href="tel:+201277346634"
            className="text-4xl text-gray-500 underline"
          >
            +20 127 734 6634
          </Link>
        </div>
      </section>
    </>
  );
}
