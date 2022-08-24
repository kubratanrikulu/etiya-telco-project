import { SearchCustomer } from './../../models/searchCustomer';
import { Customer } from './../../models/customer';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`;
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiControllerUrl);
  }

  getListByFilter(searchCustomer: SearchCustomer): Observable<Customer[]> {
    const subject = new Subject<Customer[]>();
    this.httpClient.get<Customer[]>(this.apiControllerUrl).subscribe({
      next: (response) => {
        let filteredCustomers = response;
        if (searchCustomer.id) {
          filteredCustomers = filteredCustomers.filter(
            (item) => item.id == searchCustomer.id
          );
        }
        if (searchCustomer.accountNumber) {
          filteredCustomers = filteredCustomers.filter((item) =>
            item.billingAccounts.find(
              (ba) => ba.accountNumber == searchCustomer.accountNumber
            )
          );
        }

        if (searchCustomer.gsmNumber) {
          filteredCustomers = filteredCustomers.filter(
            (item) => item.contactMedium.mobilePhone == searchCustomer.gsmNumber
          );
        }

        if (searchCustomer.firstName) {
          filteredCustomers = filteredCustomers.filter(
            (item) => item.firstName.toLowerCase().includes(searchCustomer.firstName.toLowerCase())
          );
        }
        if (searchCustomer.lastname) {
          filteredCustomers = filteredCustomers.filter(
            (item) => item.lastName.toLowerCase().includes(searchCustomer.lastname.toLowerCase())
          );
        }
        if (searchCustomer.orderNumber) {
          filteredCustomers = filteredCustomers.filter((item) =>
            item.billingAccounts.find((ba) =>
              ba.orders.find((o) => o.id == searchCustomer.orderNumber)
            )
          );
        }
        subject.next(filteredCustomers)

      },
      error:(err)=>{
        subject.error(err)
      },
      complete:()=>{        //en son calısan yer
        subject.complete()
      }
    });
    return subject.asObservable()
  }
}
