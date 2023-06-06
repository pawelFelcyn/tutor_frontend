export type AdvertisementDetailsDto = {
    id: string;
    title: string;
    description: string | null;
    creationDate: Date;
    lastModificationDate: Date;
    levels: EducationLevels;
    subject: string;
    pricePerHour: number;
    createdById: string;
}

export enum EducationLevels{
    Preschool = 1,
    Primary = 2,
    Secondary = 4,
    High = 8,
    Studies = 16
}