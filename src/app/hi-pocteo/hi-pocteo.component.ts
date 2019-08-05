import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../util/web3.service';
import { MatSnackBar } from '@angular/material';
declare let require: any;
const PocteoABI = require('../../../build/contracts/HelloPocteo.json');

@Component({
  selector: 'app-hi-pocteo',
  templateUrl: './hi-pocteo.component.html',
  styleUrls: ['./hi-pocteo.component.css']
})
export class HiPocteoComponent implements OnInit {

  name: string;
  message: string ;
  Contract: any;

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.web3Service.artifactsToContract(PocteoABI)
      .then((ContractAbstraction) => {
        this.Contract = ContractAbstraction;
      });
  }
  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  async SayHello() {
    console.log('Begin SayHello function');

    try {
      const deployedHelloPocteo = await this.Contract.deployed();
      console.log(deployedHelloPocteo);
      this.message = await deployedHelloPocteo.SayHello.call(this.name);
      console.log('Answer is : ' + this.message);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting message from blockchain; see log.');
    }
  }


  setname(e) {
    console.log('Setting name: ' + e.target.value);
    this.name = e.target.value;
  }


}
