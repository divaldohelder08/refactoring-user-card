import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function User() {
  return (
    <div className="grid items-center justify-center h-screen">
      <Card className="min-w-[23rem] flex space-x-4">
        <div className="w-full flex justify-between">
          <div className="p-6 pr-0 flex flex-col items-center justify-center">
            <img
              className=" aspect-square h-full w-14 object-cover relative flex shrink-0 overflow-hidden rounded-full "
              src="/src/assets/user1.jpg"
            />
          </div>
          <CardHeader className="flex flex-col">
            <CardTitle>Divaldo Hélder</CardTitle>
            <h2 className="text-primary">Gestor de Sistemas Informáticos</h2>
            <Label>divaldohelder308@gmail.com</Label>
            <p>(+244) 953-690-464</p>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}
