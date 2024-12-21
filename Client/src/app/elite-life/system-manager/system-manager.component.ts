import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../service/wallets.service';
import { CollaboratorService } from '../service/collaborator.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-system-manager',
  templateUrl: './system-manager.component.html',
  styleUrls: ['./system-manager.component.css']
})
export class SystemManagerComponent implements OnInit {

  hideWallet1 = true;  
  hideWallet2 = true;
  hideWallet3 = true;
  listWalletData: any;  
  balance1: any;  
  info: any;
  treeData: any;
  tree!: TreeNode[];
  countChildren: { [key: string]: number } = {};
  totalMember: any;

  constructor(private _walletsService: WalletsService, private _collaboratorService: CollaboratorService) { }

  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getWalletByCollaboratorId();
    this.countChildren = {};
    this.getCollaboratorSystemTree();
    this.getTotalValueWithLevel();
  }

  getMaskedBalance1(): string {
    const formattedBalance = this.formatNumber(this.balance1);
    return '*'.repeat(formattedBalance.length);
  }

  formatNumber(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  getWalletByCollaboratorId() {
    this._walletsService.getWalletByCollaboratorId(this.info.id).subscribe(
      (response: any) => {
        this.listWalletData = response.data;
        this.balance1 = this.listWalletData
        .filter((item: any) => item.walletTypeEnums === 'Source')
        .reduce((sum: number, item: any) => sum + (item.available || 0), 0);
      },
      (error: any) => {
        this.listWalletData = [];
        console.error('Error fetching data:', error);
      });
  }

  getCollaboratorSystemTree(){
    this._collaboratorService.getCollaboratorSystemTree(this.info.id).subscribe(
      (response: any) => {
        this.treeData = response.data;
        this.treeData.push({id: this.info.id, name: this.info.userName, rank: this.info.rank, levelLabel: "null", parentId: null});
        this.totalMember = this.treeData.length - 1;
        this.tree = this.buildTree(this.treeData);
        this.expandAll();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  buildTree(data: any[], parentId: any = null, level: number = 0): any[] {
    const children = data.filter(item => item.parentId === parentId);
  
    if (children.length === 0) {
      return [];
    }
  
    const childNodes = children.map(item => {
      return {
        key: item.id,
        data: `${item.name} (${item.rank})`,
        label: `${item.name} (${item.rank})`,
        children: this.buildTree(data, item.id, level + 1) 
      };
    });
  
    if (level === 0) {
      return childNodes;
    }

    const nodeKey = `DL${level-1}`;
    this.countChildren[nodeKey] = (this.countChildren[nodeKey] || 0) + childNodes.length;
  
    return [
      {
        key: `DL${level-1}`,
        data: `DL${level-1} (${childNodes.length})`,
        label: `DL${level-1} (${childNodes.length})`,
        children: childNodes
      }
    ];
  }

  getTotalValueWithLevel() {
    this._collaboratorService.getTotalValueWithLevel(this.info.id).subscribe(
      (response: any) => {
        this.balance1 = response.data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  expandAll() {
    this.tree.forEach((node) => {
        this.expandRecursive(node, true);
    });
  }
  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            this.expandRecursive(childNode, isExpand);
        });
    }
  }
    
    
}
