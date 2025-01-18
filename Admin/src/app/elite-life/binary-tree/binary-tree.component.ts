import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../service/collaborator.service';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.css']
})
export class BinaryTreeComponent implements OnInit {

  data: any;
  isLoading: boolean = false;

  constructor(private _collaboratorService: CollaboratorService) { }

  ngOnInit() {
    this.getBinaryTree(); 
  }

  getBinaryTree() {
    this.isLoading = true;
    this._collaboratorService.getBinaryTree().subscribe(
      (response: any) => {
        if(response && response.data) {
          this.data = response.data;
          this.data = this.mapToTree(this.data);
          this.isLoading = false;
        }
      },
      (error: any) => {
        this.data = [];
        this.isLoading = false;
        console.error('Error fetching data:', error);
      });
  }

  mapToTree(collaborators: any[]): TreeNode[] {
    const map: { [key: number]: TreeNode } = {};
    const result: TreeNode[] = [];

    collaborators.forEach(collaborator => {
      map[collaborator.id] = {
        label: `${collaborator.userName} (${collaborator.id})`,
        expanded: true,
        data: collaborator.id.toString(),
        children: []
      };
    });

    collaborators.forEach(collaborator => {
      if (collaborator.parentId === null) {
        // Nếu là gốc, thêm vào result
        result.push(map[collaborator.id]);
      } else {
        // Nếu không phải gốc, tìm parent và thêm vào children
        map[collaborator.parentId].children?.push(map[collaborator.id]);
      }
    });

    return result;
  }

}
