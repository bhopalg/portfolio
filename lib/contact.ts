export const ENQUIRY_TYPE_VALUES = [
  "opportunity",
  "project",
  "collaboration",
  "general",
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPE_VALUES)[number];

export const ENQUIRY_TYPES: Record<EnquiryType, string> = {
  opportunity: "Work opportunity",
  project: "Project / consulting",
  collaboration: "Collaboration",
  general: "General enquiry",
};
