export default function Navbar() {
  return (
    <header className="border border-[#D9D9D9] p-4">
      <nav className="flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <div>
            <span>Bienvenido Juan</span>
          </div>
          <div className="text-xs">
            <span>Martes 4 de Marzo</span>
            <span>19:00 pm</span>
          </div>
        </div>
        <ul className="flex gap-2 text-sm">
          <li>Panel de control</li>
          <li>Cerrar sesión</li>
        </ul>
      </nav>
    </header>
  )
}