import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { IProduct } from "./product";

@Component({
  //selector: "pm-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    // the + is used to transform from str to int
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: "Leaf Rake",
      productCode: "GSNG-2343",
      releaseDate: "Dec 22, 2020",
      description: "Leaf rake with 48-inch wooden handle",
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
