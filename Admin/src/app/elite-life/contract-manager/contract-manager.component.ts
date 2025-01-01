import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CollaboratorService } from '../service/collaborator.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contract-manager',
  templateUrl: './contract-manager.component.html',
  styleUrls: ['./contract-manager.component.css']
})
export class ContractManagerComponent implements OnInit, AfterViewInit  {
  @ViewChild('sigPad') sigPad: any;
  @HostListener('document:mouseup', ['$event'])
  info: any;
  height: number = 100;
  src = '';
  titleName = 'Hợp đồng đại lý';
  currentPage = 1; // Trang hiện tại
  totalPages = 0;
  imageSignUrl: any;
  visible: boolean = false;
  beginDate: any;
  fullname: any;
  address: any;
  cccd: any;
  identityPlace: any;
  isDrawing = false;
  context: any;
  sigPadElement: any;
  img: any;
  search: any;
  rangeDates: Date[] | undefined;
  data: any;
  totalMember: number = 0;
  startDate: any;
  endDate: any;
  isLoading: boolean = false;

  constructor(private _collaboratorService: CollaboratorService, private messageService: MessageService) { 
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
      onResize() {
        this.checkScreenSize();
      }
  
  private checkScreenSize() {
    if(window.innerWidth <= 1024) {
      this.height = 30;
    }
  }

  ngOnInit() {
    this.getAllCollaboratorByParentId();
  }

  ngAfterViewInit() {
    this.sigPadElement = this.sigPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');

    if (this.context) {
      this.context.strokeStyle = '#000s';
    } else {
      console.error('Không thể khởi tạo context của Canvas');
    }
  }

  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = startDate;
      this.endDate = endDate
      if(this.startDate && this.endDate) {
        this. getAllCollaboratorByParentId();
      }
    }
  }

  searchName() {
    if(this.search) {
      this.data = this.data.filter((item: any) => item != null);
      this.data = this.data.filter((item: any) => 
        (item?.userName?.toLowerCase()?.includes(this.search.toLowerCase()) || 
         item?.name?.toLowerCase()?.includes(this.search.toLowerCase()))
      );
      this.totalMember = this.data.length;
    } else {
      this.getAllCollaboratorByParentId();
      this.data = this.data.filter((item: any) => item != null);
    }
  }

  getAllCollaboratorByParentId(){
    const model = {
      startDate: this.startDate,
      endDate: this.endDate
    }
    this._collaboratorService.getAllCollaborator(model).subscribe(
      (response: any) => {
        this.data = response.data;
        this.data = this.data.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
        this.data = this.data.filter((item: any) => item != null);
        this.totalMember = this.data.length;
      },
      (error: any) => {
        this.data = [];
        console.error('Error fetching data:', error);
      });
  }

  getCollaboratorsContractManager() {
    this.isLoading = true;
    this._collaboratorService.getCollaboratorsContractManager(this.info.id).subscribe(
      (response: any) => {
        let fileName = `contract_EL${this.info.id}.pdf`;
        this.fetchPdf(fileName);
        fileName = `EL${this.info.id}.png`;
        this.fetchSign(fileName);
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      });
  }

  fetchPdf(fileName: string) {
    this._collaboratorService.getContractPdf(fileName).subscribe({
      next: (response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        this.src = URL.createObjectURL(blob); 
      },
      error: (err) => {
        console.error('Error fetching PDF:', err);
      }
    });
  }

  fetchSign(fileName: string) {
    this._collaboratorService.getContractSign(fileName).subscribe({
      next: (response: Blob) => {
        const blob = new Blob([response], { type: 'image/png' });
        this.imageSignUrl = URL.createObjectURL(blob);
      },
      error: (err) => {
        console.error('Error fetching PDF:', err);
      }
    });
  }

  // Cập nhật tổng số trang khi PDF được tải xong
  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  showDialog(customer: any) {
    this.info = customer;
    this.getCollaboratorsContractManager();
    this.beginDate = new Date(this.info.identityDate);
    this.fullname = this.info.name;
    this.address = this.info.address;
    this.cccd = this.info.identity;
    this.identityPlace = this.info.identityPlace;
    this.visible = true;
  }

  onLoadComplete() {
    this.isLoading = false;
  }

}
