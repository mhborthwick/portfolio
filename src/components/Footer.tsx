import { getCurrentYear } from "../utils";

export function Footer() {
  const year = getCurrentYear();
  return (
    <div className="flex flex-col items-center text-center p-2 bg-black text-zinc-50">
      <p>
        Made by{" "}
        <a
          className="underline underline-offset-4 hover:opacity-75"
          target="_blank"
          href="https://github.com/mhborthwick"
        >
          Mike Borthwick
        </a>{" "}
        &copy; {year}
      </p>
    </div>
  );
}
