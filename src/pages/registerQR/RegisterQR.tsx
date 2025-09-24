import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import BG from "@/assets/Le paris xd.png";
import LOGO from "@/assets/LOGO LE PARIS PNG.png";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import useRegisterQR from "./hooks/useRegisterQR";
import { Particles } from "@/components/magicui/particles";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function RegisterQR() {
  const { loading, handleChange, submit, clientForm, setClientForm, qr } =
    useRegisterQR();

  return (
    <div
      className="w-full h-full p-4 gap-4 flex flex-col items-center justify-start bg-no-repeat bg-cover md:h-screen md:bg-cover md:bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="flex flex-col items-center h-full">
        <BlurFade delay={0.6}>
          <img src={LOGO} alt="Logo de Le paris" className="w-[180px] pb-5" />
        </BlurFade>
        {qr ? (
          <div className="h-full flex items-center justify-center ">
            <Card className="max-w-[450px] bg-black/40 border-0 flex flex-col">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-white">
                  Ya esta listo tu QR!
                </CardTitle>
                <CardDescription className="text-center">
                  Presenta este QR en la puerta de Le Paris
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <img src={qr} alt="QR Code" className="rounded" />
              </CardContent>
              <CardFooter className="flex justify-center"></CardFooter>
            </Card>
          </div>
        ) : (
          <BlurFade delay={0.7}>
            <Card className="max-w-[450px] bg-black/40 border-0 flex flex-col z-40">
              <CardHeader className="space-y-1">
                <BlurFade delay={0.9}>
                  <CardTitle className="text-2xl font-bold text-center text-white">
                    Registro para Ingreso Free
                  </CardTitle>
                </BlurFade>

                <BlurFade delay={1}>
                  <CardDescription className="text-center">
                    Complete el formulario para registrarse en nuestra discoteca
                  </CardDescription>
                </BlurFade>
              </CardHeader>
              <CardContent>
                {/* <Form {...form}> */}
                <form className="space-y-2" onSubmit={submit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BlurFade delay={1.1}>
                      <div className="flex flex-col gap-2">
                        <Label className="text-white">Nombres</Label>
                        <Input
                          className="border-white/25 bg-white/20 text-white"
                          type="text"
                          value={clientForm.firstName}
                          name="firstName"
                          id="firstName"
                          onChange={handleChange}
                          disabled={loading}
                        />
                      </div>
                    </BlurFade>

                    <BlurFade delay={1.2}>
                      <div className="flex flex-col gap-2">
                        <Label className="text-white">Apellidos</Label>
                        <Input
                          className="border-white/25 bg-white/20 text-white"
                          type="text"
                          value={clientForm.lastName}
                          name="lastName"
                          id="lastName"
                          onChange={handleChange}
                          disabled={loading}
                        />
                      </div>
                    </BlurFade>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BlurFade delay={1.3}>
                      <div className="flex flex-col gap-2">
                        <Label className="text-white">Tipo de Documento</Label>
                        <Select
                          onValueChange={(value) =>
                            setClientForm({ ...clientForm, typeDoc: value })
                          }
                          defaultValue={clientForm.typeDoc}
                          value={clientForm.typeDoc}
                        >
                          <SelectTrigger className="border-white/25 bg-white/20 text-white">
                            <SelectValue placeholder="Seleccione tipo de documento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="DNI">DNI</SelectItem>
                            <SelectItem value="PASSPORT">Pasaporte</SelectItem>
                            <SelectItem value="CE">
                              Carnet de extranjería
                            </SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </BlurFade>

                    <BlurFade delay={1.4}>
                      <div className="flex flex-col gap-2">
                        <Label className="text-white">
                          Número de Documento
                        </Label>
                        <Input
                          className="border-white/25 bg-white/20 text-white"
                          type="text"
                          value={clientForm.documentNumber}
                          onChange={handleChange}
                          disabled={loading}
                          name="documentNumber"
                          id="documentNumber"
                        />
                      </div>
                    </BlurFade>
                  </div>
                  <BlurFade delay={1.5}>
                    <div className="flex flex-col gap-2">
                      <Label className="text-white">Email</Label>
                      <Input
                        className="border-white/25 bg-white/20 text-white"
                        type="email"
                        value={clientForm.email}
                        onChange={handleChange}
                        disabled={loading}
                        name="email"
                        id="email"
                      />
                    </div>
                  </BlurFade>

                  <BlurFade delay={1.6}>
                    <div className="flex flex-col gap-2">
                      <Label className="text-white">Teléfono</Label>
                      <Input
                        className="border-white/25 bg-white/20 text-white"
                        type="text"
                        value={clientForm.phoneNumber}
                        onChange={handleChange}
                        disabled={loading}
                        name="phoneNumber"
                        id="phoneNumber"
                      />
                    </div>
                  </BlurFade>

                  <BlurFade delay={1.7}>
                    <div className="flex flex-col gap-2">
                      <Label className="text-white">Dirección</Label>
                      <Input
                        className="border-white/25 bg-white/20 text-white"
                        type="text"
                        value={clientForm.address}
                        name="address"
                        id="address"
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                  </BlurFade>

                  <BlurFade delay={1.8}>
                    <Button
                      type="submit"
                      className="w-full mt-3 hover:bg-white hover:text-black"
                      disabled={loading}
                    >
                      {loading ? "Enviando..." : "Registrarse"}
                    </Button>
                  </BlurFade>
                </form>
                {/* </Form> */}
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6 border-black/50">
                <BlurFade delay={1.9}>
                  <p className="text-sm text-muted-foreground text-center">
                    Al registrarse, acepta nuestros términos y condiciones.
                  </p>
                </BlurFade>
              </CardFooter>
            </Card>
          </BlurFade>
        )}
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={600}
        ease={80}
        color={"#afafaf"}
        refresh
      />
      <div className="w-[450px] flex gap-4 items-center justify-center">
        <BlurFade delay={2}>
          <IconBrandInstagram
            className="text-white/40 w-8 h-8 cursor-pointer"
            onClick={() => {
              window.open("https://www.instagram.com/leparis.pe/", "_blank");
            }}
          />
        </BlurFade>

        <BlurFade delay={2}>
          <IconBrandTiktok
            className="text-white/40 w-8 h-8 cursor-pointer"
            onClick={() => {
              window.open("https://www.tiktok.com/@leparisperu", "_blank");
            }}
          />
        </BlurFade>

        <BlurFade delay={2}>
          <IconBrandWhatsapp
            className="text-white/40 w-8 h-8 cursor-pointer"
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=51980409346",
                "_blank"
              );
            }}
          />
        </BlurFade>
      </div>
    </div>
  );
}
