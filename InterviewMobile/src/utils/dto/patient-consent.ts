export type PatientConsent = {
  /* I removed the patientId value here as it didn't seem serve a purpose.
     The patientId is used to save and fetch PatientConsent data.  */
  consentId: number;
  agreed: boolean;
};