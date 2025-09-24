import { ChangeEvent, FormEvent, useState } from "react"
import { createClient } from "../services/leparis"
import { toast } from "sonner"
import QRCode from 'qrcode'


export default function useRegisterQR() {
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
  const [qr, setQr] = useState<string | null>(null)

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
    console.log('Submit')
    e.preventDefault()
    setLoading(true)
    if (!validate()) {
      setLoading(false)
      return
    }

    const { ok, data } = await createClient(clientForm)

    console.log('data',data)
    if (!ok) {
      toast.error(data.message)
      setLoading(false)
      return
    }

    const urlBase = 'https://zpm9ntbq-5173.brs.devtunnels.ms' // https://zpm9ntbq-5173.brs.devtunnels.ms/

    const url = await QRCode.toDataURL(`${urlBase}/qrs/${data.data}`, { width: 250, margin: 1 })

    setQr(url)

    toast.success('Registro exitoso')
    setLoading(false)
    return
  }

  return {
    loading,
    submit,
    handleChange,
    clientForm,
    setClientForm,
    qr
  }
}