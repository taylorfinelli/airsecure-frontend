import { Card } from "@/components/ui/card";

export default function WhyCard({
  header,
  paragraph,
  icon,
  src,
}: {
  header?: string;
  paragraph?: string;
  icon?: React.ReactNode;
  src?: string;
}) {
  return (
    <Card className="flex flex-col gap-y-4 lg:w-1/3 w-full p-4 rounded-2xl">
      <img src={src} className="object-cover object-right w-full h-full rounded-xl" />
      <div className="flex w-full items-center gap-x-4 justify-center">
        {icon}
        <p className="md:text-2xl font-semibold text-xl text-brand-secondary">{header}</p>
      </div>
      <div className="w-full">
        <p className="text-justify">{paragraph}</p>
      </div>
    </Card>
  );
}
