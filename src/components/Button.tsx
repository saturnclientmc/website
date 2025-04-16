export default function Button({ children }: { children: any }) {
  return <button className="bg-red border text-white p-3 px-4 rounded-xl backdrop-blur-2xl">{children}</button>;
}
