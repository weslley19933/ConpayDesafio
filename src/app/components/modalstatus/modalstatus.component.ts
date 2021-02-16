import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalstatus',
  templateUrl: './modalstatus.component.html',
  styleUrls: ['./modalstatus.component.css']
})
export class ModalstatusComponent implements OnInit {

  status = window.localStorage.getItem('status');
  message = window.localStorage.getItem('message');

  constructor(
    public dialogRef: MatDialogRef<ModalstatusComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.status, this.message);
  }

  actionFunction() {
    this.closeModal();
    window.localStorage.removeItem('status');
    window.localStorage.removeItem('message');
    window.localStorage.removeItem('cart');
    this.router.navigate(['/produtos']);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
