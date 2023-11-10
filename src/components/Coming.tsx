import Image from "next/image";
export default function Coming() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <Image
          className="animate-spin"
          src="/loading.svg"
          alt="Alrion Logo"
          width={70}
          height={70}
        />
        <h1 className="text-2xl font-bold">Em Breve...</h1>
      </div>
      <footer className="absolute bottom-8">
        <Image src="/logo.svg" alt="Alrion Logo" width={200} height={200} />
      </footer>
    </main>
  );
}
