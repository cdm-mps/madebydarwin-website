import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
      <p className="text-2xl sm:text-4xl">{"{WIP}"}</p>
      <div>
        <p className="text-6xl sm:text-8xl font-bold">MADE BY DARWIN</p>
        <p className="text-2xl sm:text-4xl">DESIGN AND DEVELOPMENT</p>
      </div>
      <div className="flex flex-col items-center p-24 gap-4">
        <p className="text-2xl sm:text-4xl font-bold">REACH US AT</p>
        <p className="text-xl sm:text-3xl hover:underline cursor-pointer">madebydarwin@gmail.com</p>
      </div>
    </main>
  );
}
