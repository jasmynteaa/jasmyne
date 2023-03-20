import Image from "next/image";
import { componentSupports, components } from "../data";

export default function Komponen() {
  return (
    <section className="py-5 px-10 md:px-32 md:py-10 w-full h-full">
      <div>
        <h3 className="mb-4 text-2xl md:text-3xl uppercase text-center">
          Component
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 container place-items-center gap-5">
          {components?.map((component) => (
            <div
              key={component?.id}
              className="bg-yellow-100 w-full h-80 rounded-md relative overflow-hidden group"
            >
              <Image
                width={200}
                height={200}
                src={component?.image?.src}
                alt={component?.image?.alt}
                className="rounded-md w-full h-full object-cover"
              />
              <article className="w-full h-fit p-3 left-0 translate-y-32 transition group-hover:translate-y-0 absolute bottom-0 bg-yellow-400 text-zinc-50">
                <h2 className="text-xl font-semibold">{component?.name}</h2>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-2xl md:text-3xl uppercase text-center">
          Support Component
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 container place-items-center gap-5">
          {componentSupports?.map((component) => (
            <div
              key={component?.id}
              className="bg-yellow-100 w-full h-72 rounded-md relative overflow-hidden group"
            >
              <Image
                width={200}
                height={200}
                src={component?.image?.src}
                alt={component?.image?.alt}
                className="rounded-md w-full h-full object-cover"
              />
              <article className="w-full h-fit p-3 left-0 translate-y-32 transition group-hover:translate-y-0 absolute bottom-0 bg-yellow-400 text-zinc-50">
                <h2 className="text-xl font-semibold">{component?.name}</h2>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
