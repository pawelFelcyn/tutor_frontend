export class FilterDto{
    public pageNumber: number = 1;
    public pageSize: number = 15;

    public getParams(): any{
        return {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize
        };
    }
}

export class AdvertisementFilterDto extends FilterDto{

    public selectedSubject: string | null = null;
    public title: string | null = null;
    public minPrice: number | null = null;
    public maxPrice: number | null = null;

    public override getParams(): any{
        const baseParams = super.getParams();
        if (this.selectedSubject != null && this.selectedSubject != ''){
            baseParams.selectedSubject = this.selectedSubject;
        }
        if (this.title != null && this.title != ''){
            baseParams.title = this.title;
        }
        if (this.minPrice != null){
            baseParams.minPrice = this.minPrice;
        }
        if (this.maxPrice != null){
            baseParams.maxPrice = this.maxPrice;
        }

        return baseParams;
    }
}