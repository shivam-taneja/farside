import pkg from "../../package.json";

export function About() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold tracking-tight text-blue-500 uppercase">
        About Farside
      </h1>
      <p className="text-sm text-gray-500">Version {pkg.version}</p>
    </div>
  );
}
