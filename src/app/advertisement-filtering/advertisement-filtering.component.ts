import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { SubjectDto } from 'src/dtos/subject.dto';
import { SubjectsService } from '../services/subjects.service';
import { AdvertisementFilterDto } from 'src/dtos/filter.dto';

@Component({
  selector: 'app-advertisement-filtering',
  templateUrl: './advertisement-filtering.component.html',
  styleUrls: ['./advertisement-filtering.component.css']
})
export class AdvertisementFilteringComponent implements OnInit {

  subjects: SubjectDto[] = [];
  pageSizes: number[] = [15, 30, 60];
  selectedSubjectName: string | null = null;
  filter: AdvertisementFilterDto = new AdvertisementFilterDto();
  @Output()
  loadEventEmitter = new EventEmitter<AdvertisementFilterDto>();

  constructor(private readonly _service: SubjectsService) { }

  ngOnInit(): void {
    this.loadSubjects();
  }

  private async loadSubjects(): Promise<void>{
    this.subjects.length = 0;
    const response = await this._service.getAll();
    
    if (response.success){
      (response.contentDeserialized as SubjectDto[]).forEach(s => {
        this.subjects.push(s);
      });
      this.selectedSubjectName = response.contentDeserialized?.[0].name ?? null;
    }
  }

  public loadAdvertisements(): void{
    this.filter.selectedSubject = this.subjects.filter(s => s.name == this.selectedSubjectName)[0].id;
    this.loadEventEmitter.emit(this.filter);
  }

}
