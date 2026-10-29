export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hi, I'm Rita! 👋🏽
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I'm a frontend developer returning to the craft and an aspiring
            full-stack software engineer. I have a passion for creating
            beautiful, functional, and secure web applications. I love learning
            new technologies and improving my skills
          </p>
        </div>
      </main>
    </div>
  );
}
