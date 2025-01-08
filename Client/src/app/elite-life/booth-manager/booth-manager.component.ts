import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BoothService } from '../service/booth.service';

@Component({
  selector: 'app-booth-manager',
  templateUrl: './booth-manager.component.html',
  styleUrls: ['./booth-manager.component.css']
})
export class BoothManagerComponent implements OnInit {
  @ViewChild('fileUploader', { static: false }) fileUploader!: ElementRef<HTMLInputElement>;
  @ViewChild('fileBannerUploader', { static: false }) fileBannerUploader!: ElementRef<HTMLInputElement>;
  imageUrl: string | null = null;
  imageBannerUrl: string | null = null;
  fileToUpload: File | null = null;
  fileAddBooth: File | null = null;
  fileEditBooth: File | null = null;
  visible: boolean = false;
  name: any;
  description: any;
  contact: any;
  nameEdit: any;
  descriptionEdit: any;
  contactEdit: any;
  boothList: any;
  boothEdit: any;
  visibleEdit: boolean = false;

  constructor(private boothService: BoothService, private messageService: MessageService) { }

  ngOnInit() {
    this.getImageMain('image_main.png');
    this.getImageBanner("image_banner.png");
    this.getBooths();
  }

  triggerFileUpload() {
    this.fileUploader?.nativeElement.click();
  }

  triggerFileBannerUpload() {
    this.fileBannerUploader?.nativeElement.click();
  }

  uploadImage(files: any){
    const originalFile = files.target.files.item(0); // Lấy file đầu tiên từ danh sách

    if (originalFile) {
      this.fileToUpload = new File([originalFile], "image_main.png", { type: originalFile.type });
      this.boothService.uploadImage(this.fileToUpload).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Upload Success', detail: response.message });
          this.getImageMain('image_main.png'); 
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Upload Failed', detail: error.message });
        }
      });
    }
  }

  getImageMain(fileName: string): void {
    this.boothService.getImage(fileName).subscribe({
      next: (blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      error: (error) => {
        this.imageUrl = "";
        console.log(error.message)
      }
    });
  }

  uploadImageBanner(files: any){
    const originalFile = files.target.files.item(0); // Lấy file đầu tiên từ danh sách

    if (originalFile) {
      this.fileToUpload = new File([originalFile], "image_banner.png", { type: originalFile.type });
      this.boothService.uploadImage(this.fileToUpload).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Upload Success', detail: response.message });
          this.getImageBanner('image_banner.png'); 
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Upload Failed', detail: error.message });
        }
      });
    }
  }

  getImageBanner(fileName: string): void {
    this.boothService.getImage(fileName).subscribe({
      next: (blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageBannerUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      error: (error) => {
        this.imageBannerUrl = "";
        console.log(error.message)
      }
    });
  }

  deleteFileImage(fileName: any) {
    this.boothService.deleteImage(fileName).subscribe({
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Xóa ảnh thành công', detail: response.message });
        this.getImageMain('image_main.png');
        this.getImageBanner("image_banner.png")
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Xóa ảnh thất bại', detail: error.message });
      }
    });
  }

  showDialogAdd() {
    this.visible = true;
  }

  uploadImageProduct(files: any) {
    this.fileAddBooth = files.target.files.item(0); 
  }

  uploadEditImageProduct(files: any) {
    this.fileEditBooth = files.target.files.item(0); 
  }

  addBooth() {
    if(!this.fileAddBooth) {
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lonhg chọn ảnh" });
      return;
    }
    if(!this.name){
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng nhập tên" });
      return;
    }
    if(!this.description){
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng nhập mô tả" });
      return;
    }
    if(!this.contact){
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng nhập liên hệ" });
      return;
    }
    this.fileAddBooth = new File([this.fileAddBooth], `${this.name}.png`, { type: this.fileAddBooth.type });
    const model = {
      title: this.name,
      description: this.description,
      contact: this.contact,
      image: `${this.name}.png`
    }
    this.boothService.uploadImage(this.fileAddBooth).subscribe({
      next: (response) => {
        this.boothService.addBooth(model).subscribe({
          next: (response) => {
            this.messageService.add({ severity: 'success', summary: 'Thêm hàng hóa thành công', detail: response.message });
            this.visible = false;
            this.getBooths();
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Thêm hàng hóa thất bại', detail: error.message });
          }
        });
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Thêm hàng hóa thất bại', detail: error.message });
      }
    });
  }

  getBooths() {
    this.boothService.getBooths().subscribe({
      next: (response) => {
        this.boothList = response.data;
        this.boothList.forEach((e: any)=> {
          this.boothService.getImage(e.image).subscribe({
            next: (blob) => {
              const reader = new FileReader();
              reader.onload = () => {
                e.image = reader.result as string;
              };
              reader.readAsDataURL(blob);
            },
            error: (error) => {
              e.image = "";
              console.log(error.message)
            }
          });
        });
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Lấy danh sách hàng hóa thất bại', detail: error.message });
      }
    });
  }

  showDialogEdit(booth: any) {
    this.boothEdit = booth;
    this.nameEdit = booth.title;
    this.descriptionEdit = booth.description;
    this.contactEdit = booth.contact;
    this.visibleEdit = true;
  }

  updateBooth() {
    if(!this.fileEditBooth) {
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng chọn ảnh" });
      return;
    }
    if(!this.nameEdit){
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng nhập tên" });
      return;
    }
    if(!this.descriptionEdit){
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng nhập mô tả" });
      return;
    }
    if(!this.contactEdit){
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: "Vui lòng nhập liên hệ" });
      return;
    }
    this.fileEditBooth = new File([this.fileEditBooth], `${this.nameEdit}.png`, { type: this.fileEditBooth.type });
    const model = {
      id: this.boothEdit.id,
      title: this.nameEdit,
      description: this.descriptionEdit,
      contact: this.contactEdit,
      image: `${this.nameEdit}.png`
    }
    this.boothService.deleteImage(`${this.boothEdit.title}.png`).subscribe({
      next: (response) => {
        if(this.fileEditBooth) {
          this.boothService.uploadImage(this.fileEditBooth).subscribe({
            next: (response) => {
              this.boothService.updateBooth(model).subscribe({
                next: (response) => {
                  this.messageService.add({ severity: 'success', summary: 'Chỉnh sửa hàng hóa thành công', detail: response.message });
                  this.visibleEdit = false;
                  this.getBooths();
                },
                error: (error) => {
                  this.messageService.add({ severity: 'error', summary: 'Chỉnh sửa hàng hóa thất bại', detail: error.message });
                }
              });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Chỉnh sửa hàng hóa thất bại', detail: error.message });
            }
          });
        }
      },
      error: (error) => {
      }
    });
  }

  onDelete(item: any) {
    this.boothService.deleteImage(`${item.title}.png`).subscribe({
      next: (response) => {
        this.boothService.deleteBooth(item.id).subscribe({
          next: (response) => {
            this.messageService.add({ severity: 'success', summary: 'Xóa hàng hóa thành công', detail: response.message });
            this.getBooths();
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Xóa hàng hóa thất bại', detail: error.message });
          }
        });
      },
      error: (error) => {
      }
    });
  }

}
