import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  height: number = 100;
  src = '';
  titleName = '';
  currentPage = 1; // Trang hiện tại
  totalPages = 0;

  constructor(private route: ActivatedRoute) { 
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
    const currentPath = this.route.snapshot.routeConfig?.path;

    // Sử dụng switch-case để kiểm tra và gán giá trị
    switch (currentPath) {
      case 'about-us':
        this.src = '/assets/tutorial/about-us.pdf';
        this.titleName = 'Về chúng tôi';
        break;

      case 'guide':
        this.src = '/assets/tutorial/hdsd.pdf';
        this.titleName = 'Hướng dẫn sử dụng';
        break;

      case 'policy':
        this.src = '/assets/tutorial/business-policy.pdf';
        this.titleName = 'Chính sách kinh doanh';
        break;

      case 'legal':
        this.src = '/assets/tutorial/legality.pdf';
        this.titleName = 'Cơ sở pháp lý';
        break;

      case 'culture':
        this.src = '/assets/tutorial/culture.pdf';
        this.titleName = 'Văn hóa Elite';
        break;

      default:
        this.src = ''; 
        break;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Quay lại trang trước
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Cập nhật tổng số trang khi PDF được tải xong
  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
    console.log('Tổng số trang: ', this.totalPages);
  }

}
