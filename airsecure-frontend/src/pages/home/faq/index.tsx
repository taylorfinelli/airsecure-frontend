import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";

export default function FAQ() {
  const accordionItems = [
    {
      trigger: "How do I know when my ducts need cleaned?",
      content:
        "Your ducts may need cleaning if you notice visible dust or debris coming from vents, poor air quality, or unpleasant odors like mustiness. Increased dust in the home, inconsistent airflow, or mold and mildew growth in your ducts are also signs that cleaning is needed. If you've recently renovated or had construction done, it's a good idea to clean your ducts to remove dust and debris. Generally, it's recommended to clean ducts every 3-5 years, though this can vary depending on factors like pets or specific home conditions.",
    },
    {
      trigger: "How long does duct cleaning take?",
      content:
        "Duct cleaning typically takes about 2 to 4 hours, depending on the size of your home and the complexity of your duct system. If the ducts are heavily clogged or have a lot of buildup, it might take longer. The process includes inspection, cleaning, and sometimes sanitizing the ducts, so the time can vary based on these factors.",
    },
    {
      trigger: "Does AirSecure clean dryer vents?",
      content:
        "Yes! We offer dryer vent cleaning services to help prevent fires and improve dryer efficiency. Lint buildup in dryer vents is a common cause of fires, so it's important to have your vents cleaned regularly. Our technicians can remove lint and debris from the vent, ensuring that your dryer operates safely and efficiently.",
    },
    {
      trigger: "What does the AirSecure cleaning process look like?",
      content:
        "Our duct cleaning process includes a thorough inspection of your ducts to assess their condition and identify any problem areas. We use specialized equipment to remove dust, debris, and other contaminants from the ducts, ensuring that they are clean and free of obstructions. We can also sanitize the ducts to kill bacteria and mold spores, improving your indoor air quality. Our technicians are trained and experienced in duct cleaning, so you can trust that your ducts will be cleaned safely and effectively.",
    },
    {
      trigger: "Is AirSecure available in my area?",
      content:
        "AirSecure proudly operates in the Northern Utah area, including Nephi, Provo, Salt Lake City, and surrounding areas. If you're in need of duct cleaning services in these areas, we're here to help! Our team of experienced technicians can provide professional duct cleaning services to improve your indoor air quality and keep your home clean and comfortable.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col w-5/6 gap-y-8 mb-8 max-w-screen-2xl">
        <p className="md:text-4xl font-semibold text-center text-3xl text-green-secondary">
          Frequently Asked Questions
        </p>
        <Accordion type="multiple">
          {accordionItems.map((item, id) => (
            <div key={id}>
              <AccordionItem value={id.toString()}>
                <AccordionTrigger className="text-green-secondary hover:text-green-primary">
                  {
                    <div className="flex flex-row items-center gap-x-2">
                      <div>
                        <CircleHelp />
                      </div>
                      <p>{item.trigger}</p>
                    </div>
                  }
                </AccordionTrigger>
                <AccordionContent className="text-green-secondary">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
