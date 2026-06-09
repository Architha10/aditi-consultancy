const PRIMARY =
  import.meta.env.VITE_WHATSAPP_PRIMARY; 

export function buildWhatsAppUrl(message: string, phone = PRIMARY): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildLeadWhatsAppMessage(data: {
  name: string;
  phone: string;
  email?: string;
  location:string;
  service:string;
  projectType: string;
  areaSqFt?: string;
  packageInterest?: string;
  message?: string;
}): string {
  const lines = [
    "Hi Aditi Consultants, I submitted a quotation request:",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];
  if (data.email) lines.push(`Email: ${data.email}`);
  lines.push(`Project: ${data.projectType}`);
  lines.push(`Service: ${data.service}`);
  if (data.areaSqFt) lines.push(`Area: ${data.areaSqFt} sq ft`);
  if (data.location) lines.push(`Location: ${data.location}`);
  if (data.message) lines.push(`Message: ${data.message}`);
  return lines.join("\n");
}