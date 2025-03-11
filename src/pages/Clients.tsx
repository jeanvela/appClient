export default function Clients() {
  const clients = [
    {
      "nombre": "Juan Pérez",
      "documento": "12345678",
      "fecha_creacion": "2024-03-01"
    },
    {
      "nombre": "María Gómez",
      "documento": "87654321",
      "fecha_creacion": "2024-02-15"
    },
    {
      "nombre": "Carlos Rodríguez",
      "documento": "11223344",
      "fecha_creacion": "2024-01-30"
    },
    {
      "nombre": "Ana López",
      "documento": "44332211",
      "fecha_creacion": "2023-12-25"
    },
    {
      "nombre": "Pedro Sánchez",
      "documento": "55667788",
      "fecha_creacion": "2023-11-10"
    }
  ]
  return (
    <section className="w-full p-2">
      <div>
        <h1 className="text-2xl font-bold">Clientes</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="rounded-2xl border border-[#D9D9D9 flex flex-col p-4 text-xs">
          <div>
            <span>Fecha de creación</span>
            <span>{clients[0].fecha_creacion}</span>
          </div>
          <div>
            <span>Documento</span>
            <span>{clients[0].documento}</span>
          </div>
          <div className="flex flex-col">
            <span>Nombre</span>
            <span>{clients[0].nombre}</span>
          </div>
        </div>
      </div>
      {
        clients.map((d, i) => {
          return (
            <div key={i} className="border border-[#D9D9D9] p-4 flex flex-col justify-start gap-2.5 w-full">
              <span>{d.nombre}</span>
              <span>{d.documento}</span>
              <span>{d.fecha_creacion}</span>
            </div>
          )
        })
      }
    </section>
  )
}