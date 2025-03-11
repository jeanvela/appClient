import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function RegisterClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Registro de Cliente</CardTitle>
          <CardDescription className="text-center">
            Complete el formulario para registrarse en nuestra discoteca
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Form {...form}> */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Nombres</Label>
                  <Input />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Apellidos</Label>
                  <Input />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Tipo de Documento</Label>
                  <Select >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione tipo de documento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dni">DNI</SelectItem>
                      <SelectItem value="pasaporte">Pasaporte</SelectItem>
                      <SelectItem value="cedula">Cédula de Identidad</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Número de Documento</Label>
                  <Input />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email"/>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Teléfono</Label>
                <Input />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Dirección</Label>
                <Input />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Registrarse"}
              </Button>
            </form>
          {/* </Form> */}
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-muted-foreground">Al registrarse, acepta nuestros términos y condiciones.</p>
        </CardFooter>
      </Card>
    </div>
  )
}

