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
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getCollaboratorsContractManager();
    this.beginDate = new Date(this.info.identityDate);
    this.fullname = this.info.name;
    this.address = this.info.address;
    this.cccd = this.info.identity;
    this.identityPlace = this.info.identityPlace;

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

  getCollaboratorsContractManager() {
    this._collaboratorService.getCollaboratorsContractManager(this.info.id).subscribe(
      (response: any) => {
        this.src = `/assets/contract/contract_EL${this.info.id}.pdf`;
        this.imageSignUrl = response.data.imageSignUrl;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  // Cập nhật tổng số trang khi PDF được tải xong
  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  showDialog() {
    this.visible = true;
  }

  onMouseDown(e: MouseEvent) {
    if (this.context) {
      this.isDrawing = true; // Bắt đầu vẽ
      const coords = this.relativeCoords(e);
      this.context.beginPath(); // Bắt đầu vẽ từ vị trí này
      this.context.moveTo(coords.x, coords.y); // Đặt điểm bắt đầu
    }
  }
  
  onMouseMove(e: MouseEvent) {
    if (this.isDrawing && this.context) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y); // Vẽ tiếp từ vị trí hiện tại
      this.context.stroke(); // Vẽ đường
    }
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    this.isDrawing = false; // Dừng vẽ khi thả chuột
    if (this.context) {
      this.context.closePath(); // Kết thúc vẽ
    }
  }

  private relativeCoords(event: any) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }

  confirm() {
    this.img = this.sigPadElement.toDataURL("image/png");
    console.log(this.img);
  }

  save() {
    console.log(this.beginDate)
    if(!this.fullname) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng nhập họ tên'});
    }

    if(!this.address) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng nhập địa chỉ'});
    }

    if(!this.cccd) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng nhập số CCCD'});
    }

    if(!this.beginDate) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng nhập ngày cấp CCCD'});
    }

    if(!this.identityPlace) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng nhập nơi cấp CCCD'});
    }

    if(!this.img) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng ký tên'});
    }

    const model = {
      collaboratorId: this.info.id,
      imageData: this.img
    }

    this._collaboratorService.saveSignature(model).subscribe(
      (response: any) => {
        if(response.data) {
          this.visible = false;
          this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Ký tên thành công'});
          this.imageSignUrl = response.data.filePath;
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });


  }

}
