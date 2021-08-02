import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'wb-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  //One way to create a form with nested groups
  /*
  name: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
  });

  geolocation: FormGroup = new FormGroup({
    lat: new FormControl(''),
    long: new FormControl(''),
  });

  address: FormGroup = new FormGroup({
    city: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl(''),
    zipcode: new FormControl(''),
    geolocation: this.geolocation,
  });

  user: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    name: this.name,
    address: this.address,
  });*/

  constructor(private fb: FormBuilder, private service: UserService) {}

  user: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: '',
    password: '',
    name: this.fb.group({
      firstname: '',
      lastname: '',
    }),
    address: this.fb.group({
      city: '',
      street: '',
      number: '',
      zipcode: '',
      geolocation: this.fb.group({
        lat: '',
        long: '',
      }),
    }),
    phone: this.fb.array(['123', '456']),
  });

  name: FormGroup = this.user.get('name') as FormGroup;
  address: FormGroup = this.user.get('address') as FormGroup;
  geolocation: FormGroup = this.address.get('geolocation') as FormGroup;
  phones: FormArray = this.user.get('phone') as FormArray;

  ngOnInit() {
    this.service.getUser().subscribe(
      (userData) => {
        delete userData.id;
        delete userData.__v;
        delete userData.phone;
        this.user.patchValue(userData);
      },
      (error) => console.log('Error while fetching user information', error)
    );
  }

  success: boolean = false;
  error: boolean = false;

  onSubmit() {
    if (this.user.valid) {
      this.service.signup(this.user.value).subscribe(
        (res) => {
          this.success = true;
          this.user.reset();
        },
        (err) => {
          console.log('Error during signup:', err);
          this.error = true;
        }
      );
    }
  }

  addNewPhone() {
    this.phones.controls.push(new FormControl(''));
  }

  fetchUserLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let geoInformation = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
          this.user.patchValue({
            address: {
              geolocation: geoInformation,
            },
          });
        },
        (error) => {
          console.log('Unable to fetch location', error);
        }
      );
    } else {
      alert('location fetch not available');
    }
  }
}
