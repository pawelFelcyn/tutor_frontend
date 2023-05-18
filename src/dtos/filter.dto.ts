export class FilterDto{
    public pageNumber: number = 1;
    public pageSize: number = 15;

    public buildQuery(): string{
        return `page=${this.pageNumber}&pageSize=${this.pageSize}`
    }
}

export class AdvertisementFilterDto extends FilterDto{

    public selectedSubject: string | null = null;
    public title: string | null = null;
    public minPrice: number | null = null;
    public maxPrice: number | null = null;

    public override buildQuery(): string{
        const stringArr: string[] = [super.buildQuery(), '&filters= '];
        if (this.selectedSubject != null && this.selectedSubject != ''){
            stringArr.push(`selectedSubject@=${this.selectedSubject}, `);
        }
        if (this.title != null && this.title != ''){
            stringArr.push(`title@=${this.title}, `);
        }
        if (this.minPrice != null){
            stringArr.push(`pricePerHour>${this.minPrice}, `);
        }
        if (this.maxPrice != null){
            stringArr.push(`pricePerHour<${this.maxPrice}, `);
        }

        return stringArr.join('');
    }
}