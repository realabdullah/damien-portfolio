export type CardProps = {
  name: string;
  address: string;
  review: string;
  socials: { type: "X" | "linkedin" | "facebook"; href: string }[];
};
