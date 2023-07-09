import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() carouselId: any;
  productGroups: any[] = [];


  data: any[] = [];

  ngOnInit(): void {
    this.data = [
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-b9pwig4brj/images/stencil/320w/products/152/1050/Website_sample_image__94022.1676482966.jpg?c=1',
        name: 'Test',
        description: 'Test-Description'
      },

    ]


    const itemsPerGroup = 6;
    this.productGroups = this.chunkArray(this.data, itemsPerGroup);
  }
  chunkArray(array: any[], size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
