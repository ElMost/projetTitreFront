interface Service {
  image: string | undefined;
  id: string;
  nomDesServices: string;
  date: string;
  heure: string;
}

export interface IServiceCardProps {
  service: Service;
  index: number;
  handleRemoveReservation: (id: string) => void;
  HandleUpdate: (x: any) => void;
}
