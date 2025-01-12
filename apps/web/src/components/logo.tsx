export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 md:w-5 md:h-5 bg-primary rounded-full" />
        <div className="w-3 h-3 md:w-5 md:h-5 bg-accent rounded-full" />
      </div>
      <span className="ml-1 md:ml-2 text-md md:text-2xl font-semibold">
        Yaadho
      </span>
    </div>
  );
}
