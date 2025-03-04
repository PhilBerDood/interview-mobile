export type PatientConsent = {
  consentId: number;
  agreed: boolean;
};

export type PatientConsentContainer = {
  id: number;
  patientConsents: PatientConsent[];
};