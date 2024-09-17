import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center">
      <h1 className="text-5xl">Rapport de stage</h1>
      <div className="flex flex-col text-center gap-2">
        <Link
          href="/stagiaire"
          className="text-sky-400 underline hover:text-sky-600 transition ease-in-out">
            Rapport de stage - Stagiaire
        </Link>
        <Link
          href="/responsable"
          className="text-sky-400 underline hover:text-sky-600 transition ease-in-out">
            Rapport de stage - Responsable
        </Link>
      </div>
    </div>
  );
}
