import { z } from "zod";

export const interestIds = ["social-research", "market-consumer-research", "monitoring-evaluation-learning", "surveys-fieldwork", "qualitative-participatory", "data-insight-communication", "partnership", "general"] as const;
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(254),
  organization: z.string().trim().max(160).optional().default(""),
  interest: z.enum(interestIds, { error: "Please choose an area of interest." }),
  message: z.string().trim().min(20, "Please include at least 20 characters.").max(5000),
  consent: z.literal(true, { error: "Please acknowledge how your information will be used." }),
  website: z.string().max(0, "Unable to accept this enquiry.").optional().default(""),
}).strict();

export function contactReady() {
  return !!process.env.RESEND_API_KEY && z.email().safeParse(process.env.CONTACT_TO_EMAIL).success && z.email().safeParse(process.env.CONTACT_FROM_EMAIL).success;
}
export function composeEnquiry(data: z.infer<typeof contactSchema>) {
  return `Website enquiry\n\nName: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.organization || "Not provided"}\nArea: ${data.interest}\n\n${data.message}\n\nThe sender acknowledged use of this information to respond to their enquiry.`;
}
