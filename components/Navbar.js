export default function Navbar({title}) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300">
      <div className="text-lg font-semibold">{title}</div>
    </nav>
  )
}
