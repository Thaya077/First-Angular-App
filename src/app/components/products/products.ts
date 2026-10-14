import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  public products = [
    {
      productId: '001',
      productName: 'White Basmati Rice',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 400',
      quantity: 100,
      productDescription: 'White Basmati Rice imported from Pakistan.',
    },
    {
      productId: '002',
      productName: 'Flour',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 190',
      quantity: 50,
      productDescription: 'Super fine Whole grain general purpose flour.',
    },
    {
      productId: '003',
      productName: 'Sugar',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 200',
      quantity: 1200,
      productDescription: 'White Sugar manufactured by Palwatte Factory.',
    },
    {
      productId: '004',
      productName: 'Dhal',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 200',
      quantity: 10,
      productDescription: 'Imported mysoor dhal from India.',
    },
  ];
}
