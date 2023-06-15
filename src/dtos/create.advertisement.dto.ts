import { EducationLevels } from "./advertisement.details.dto";

export class CreateAdvertisementDto{
    title: string = '';
    description: string | null = null;
    levels: EducationLevels = EducationLevels.Primary;
    subjectId: string = '';
    pricePerHour: number = 0.00;
}