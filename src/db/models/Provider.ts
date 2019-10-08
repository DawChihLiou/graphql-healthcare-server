import mongoose, { Schema, Document } from 'mongoose';

export interface IProvider extends Document {
    drgDefinition: string;
    providerId: number;
    providerName: string;
    providerStreetAddress: string;
    providerCity: string;
    providerState: string;
    providerZipCode: number;
    hospitalReferralRegionDescription: string;
    totalDischarges: number;
    averageCoveredCharges: number;
    averageTotalPayments: number;
    averageMedicarePayments: number;
}

const ProviderSchema: Schema = new Schema({
    drgDefinition: String,
    providerId: Number,
    providerName: String,
    providerStreetAddress: String,
    providerCity: String,
    providerState: String,
    providerZipCode: Number,
    hospitalReferralRegionDescription: String,
    totalDischarges: Number,
    averageCoveredCharges: Number,
    averageTotalPayments: Number,
    averageMedicarePayments: Number,
});

export default mongoose.model<IProvider>('Provider', ProviderSchema);
