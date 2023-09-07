import { INoticias} from "./INoticias";

export const CalcularMinutosDePublicada:(objeto:INoticias) => number = (objeto:any) => {
  const now = new Date();
  const minutes = Math.floor((now.getTime() - objeto.fecha.getTime()) / 60000);
  return minutes;
};
