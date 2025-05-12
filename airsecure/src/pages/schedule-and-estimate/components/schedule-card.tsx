import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, LoaderCircle } from "lucide-react";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import Header from "@/components/text/header";
import { format } from "date-fns";

interface ScheduleForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  servicesNeeded: string;
  serviceDate: Date;
}

const scheduleFormSchema: ZodType<ScheduleForm> = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  servicesNeeded: z.string().min(1, "Services needed is required"),
  serviceDate: z.date({
    required_error: "Please select a service date",
  }).min(new Date(), { message: "Service date must be in the future" }),
});

export default function ScheduleCard() {
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ScheduleForm>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      servicesNeeded: "",
      serviceDate: undefined,
    },
  });

  useEffect(() => {
    if (date) {
      setValue("serviceDate", date);
    }
  }, [date, setValue]);

  const formatPhoneNumber = (value: string) => {
    // Remove non-numeric characters
    const cleaned = value.replace(/\D/g, "");
    // Format it as (xxx) xxx-xxxx
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
        10
      )}`;
    }
  };

  const phoneNumber = watch("phoneNumber");

  useEffect(() => {
    // Automatically format the phone number when it changes (paste or select)
    if (phoneNumber) {
      setValue("phoneNumber", formatPhoneNumber(phoneNumber));
    }
  }, [phoneNumber, setValue]); // When the phone number changes

  const submitForm = (data: ScheduleForm) => {
    const formattedData = {
      ...data,
      serviceDate: format(data.serviceDate, "MM-dd-yyyy"),
    };
    console.log(formattedData);
  };

  return (
    <Card className="md:w-[30rem] rounded-2xl">
      <CardHeader className="flex flex-col items-center">
        <Header size="2xl" text="Don't need an estimate?" variant="dark" center={true} />
        <p>Find your scheduling options below.</p>
        <Button className="text-md w-full">
          Call us today @ 801-592-3163
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4 items-center">
        <Separator />
        <form
          className="flex flex-col items-center gap-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="flex flex-row gap-x-4">
            <div>
              <Label>First name</Label>
              <Input
                id="first-name"
                placeholder="John"
                {...register("firstName")}
              />
              {errors.firstName && (
                <Label className="text-red-500">
                  {errors.firstName.message}
                </Label>
              )}
            </div>
            <div>
              <Label>Last name</Label>
              <Input
                id="last-name"
                placeholder="Doe"
                {...register("lastName")}
              />
              {errors.lastName && (
                <Label className="text-red-500">
                  {errors.lastName.message}
                </Label>
              )}
            </div>
          </div>
          <div className="w-full">
            <Label>Phone number</Label>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  value={formatPhoneNumber(field.value)} // Format the phone number as the user types
                  onChange={(e) => field.onChange(e.target.value)} // Update the form state
                  maxLength={12} // Limit the length to "xxx-xxx-xxxx"
                  placeholder="123-456-7890"
                />
              )}
            />
            {errors.phoneNumber && (
              <Label className="text-red-500">
                {errors.phoneNumber.message}
              </Label>
            )}
          </div>
          <div className="w-full">
            <Label>Email address</Label>
            <Input
              id="email"
              placeholder="john.doe@mail.com"
              {...register("email")}
            />
            {errors.email && (
              <Label className="text-red-500">{errors.email.message}</Label>
            )}
          </div>
          <div className="w-full">
            <Label>Services needed</Label>
            <Textarea
              id="services-needed"
              placeholder={`Describe the services you're interested in. If you're unsure, just say "I'm not sure."`}
              {...register("servicesNeeded")}
            />
            {errors.servicesNeeded && (
              <Label className="text-red-500">
                {errors.servicesNeeded.message}
              </Label>
            )}
          </div>
          <div className="w-full">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild className="w-full">
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select a service date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.serviceDate && (
              <Label className="text-red-500">
                {errors.serviceDate.message}
              </Label>
            )}
          </div>
          <CardDescription>
            Please note that this is not a guaranteed appointment. We will
            contact you to confirm your appointment time and date.
          </CardDescription>
          <Button type="submit" className="w-full">
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
