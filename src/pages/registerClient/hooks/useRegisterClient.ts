import { ChangeEvent, FormEvent, useState } from "react"
import { createClient } from "../services/leparis"
import { toast } from "sonner"

export default function useRegisterClient() {
  const initialState = {
    firstName: '',
    lastName: '',
    typeDoc: '',
    documentNumber: '',
    email: '',
    phoneNumber: '',
    address: ''
  }
  const [loading, setLoading] = useState(false)
  const [clientForm, setClientForm] = useState(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setClientForm({ ...clientForm, [name]: value })
  }

  function validate() {
    if (!clientForm.firstName) {
      toast.warning('El nombre es obligatorio')
      return false
    }

    if (!clientForm.lastName) {
      toast.warning('El apellido es obligatorio')
      return false
    }

    if (!clientForm.documentNumber) {
      toast.warning('El número de documento es obligatorio')
      return false
    }

    if (!clientForm.email) {
      toast.warning('El email es obligatorio')
      return false
    }

    if (!clientForm.typeDoc) {
      toast.warning('El tipo de documento es obligatorio')
      return false
    }

    if (!clientForm.phoneNumber) {
      toast.warning('El telefono es obligatorio')
      return false
    }
    return true
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    if (!validate()) {
      setLoading(false)
      return
    }

    const { ok, data } = await createClient(clientForm)

    if (!ok) {
      toast.error(data.message)
      setLoading(false)
      return
    }

    toast.success('Registro exitoso')
  }

  return {
    loading,
    submit,
    handleChange,
    clientForm
  }
}