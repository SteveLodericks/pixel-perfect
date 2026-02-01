import { z } from "zod";

// Event form validation schema
export const eventSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Title is required" })
    .max(200, { message: "Title must be less than 200 characters" }),
  description: z
    .string()
    .trim()
    .max(2000, { message: "Description must be less than 2000 characters" })
    .optional()
    .or(z.literal("")),
  date: z
    .string()
    .trim()
    .max(100, { message: "Date must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  time: z
    .string()
    .trim()
    .max(100, { message: "Time must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  location: z
    .string()
    .trim()
    .max(300, { message: "Location must be less than 300 characters" })
    .optional()
    .or(z.literal("")),
  capacity: z
    .string()
    .trim()
    .max(50, { message: "Capacity must be less than 50 characters" })
    .optional()
    .or(z.literal("")),
  eventbriteId: z
    .string()
    .trim()
    .min(1, { message: "Eventbrite Event ID is required" })
    .max(50, { message: "Eventbrite ID must be less than 50 characters" })
    .regex(/^[0-9]+$/, { message: "Eventbrite ID must contain only numbers" }),
});

export type EventFormData = z.infer<typeof eventSchema>;

export function validateEventForm(data: EventFormData): { 
  success: boolean; 
  data?: EventFormData; 
  errors?: string[] 
} {
  const result = eventSchema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  const errors = result.error.errors.map((err) => err.message);
  return { success: false, errors };
}
