export default function Home() {
  const date = new Date();

  return (
    <div className="flex flex-col font-bold text-5xl h-screen justify-center items-center">
      Halo ibu!
      <p className="font-light text-sm">Ini di internet!</p>
      <p className="font-light text-sm">{date.toString()}</p>
    </div>
  );
}
