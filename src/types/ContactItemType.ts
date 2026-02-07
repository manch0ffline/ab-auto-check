export type ContactItem = {
  id: string;
  title: string;
  icon: string;
  link: string;
  aos: 'fade-left' | 'fade-right';
  delay?: number;
  external?: boolean;
  label: string;
};
