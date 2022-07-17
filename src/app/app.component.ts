import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EAuctionService } from './e-auction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-auction';
  productId: any;
  submitted: Boolean = false;
  success: Boolean = false;
  error: Boolean = false;
  successMessage: String = "";
  failureMessage: String = "";
  dataSource: any;
  bidsExist: Boolean = false;
  displayedColumns: any;
  @ViewChild('bidTbSort') bidTbSort = new MatSort();

  constructor(private auctionService: EAuctionService) {

  }

  ngOnInit() {
    this.displayedColumns = ["Bid Id", "Buyer First Name", "Buyer Last Name", "Buyer State", "Buyer City", "Bid Amount", "Product Short Description",
      "Product Detailed Description", "Product Category", "Product Starting Price", "Product Bid End Date"];

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.bidTbSort;
  }

  getBidDetails() {
    this.bidsExist = false;
    console.log("id:", this.productId);
    this.dataSource = new MatTableDataSource();
    this.auctionService.getBidDetails(this.productId).subscribe(
      (res: any) => {
        this.bidsExist = true;
        this.dataSource = res;
      },
      (error) => {
        this.bidsExist = false;
        alert("Cant find any product under given ID");
      }
    );

  }
}

