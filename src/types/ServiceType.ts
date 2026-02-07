export type Service = {
  id: number;
  recomended?: boolean;
  title: string;
  price: string;
  icon: string;
  bargain?: string,
  description: string;
  includedServices: string[];
  guarantee?: string
  suitableFor?: string
};
