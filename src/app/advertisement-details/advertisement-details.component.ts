import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementsService } from '../services/advertisements.service';
import { AdvertisementDetailsDto, EducationLevels } from 'src/dtos/advertisement.details.dto';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  details: AdvertisementDetailsDto | null = null;
  loadingDetailsErrorOccured: boolean = false;

  constructor(private readonly _route: ActivatedRoute,
    private readonly _advertisementsService: AdvertisementsService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      const id = params['id'] as string;
      this.loadDetails(id)
    });
  }

  private async loadDetails(id: string): Promise<void>{
    const result = await this._advertisementsService.getById(id);
    if (!result.success){
      this.loadingDetailsErrorOccured = true;
      return;
    }

    this.details = result.contentDeserialized as AdvertisementDetailsDto;
    this.loadingDetailsErrorOccured = false;
  }

  public getEducationLevelsString(levels: EducationLevels): string {
    const levelStrings: string[] = [];

    if (levels & EducationLevels.Preschool) {
      levelStrings.push('Preschool');
    }
    if (levels & EducationLevels.Primary) {
      levelStrings.push('Primary');
    }
    if (levels & EducationLevels.Secondary) {
      levelStrings.push('Secondary');
    }
    if (levels & EducationLevels.High) {
      levelStrings.push('High');
    }
    if (levels & EducationLevels.Studies) {
      levelStrings.push('Studies');
    }

    return levelStrings.join(', ');
  }
}
