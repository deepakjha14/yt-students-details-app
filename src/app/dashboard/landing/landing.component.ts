import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';

@Component({
	selector: 'students-details-landing',
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss'
})
export class LandingComponent {
	filter: FormControl;
	students: Array<any> = [
		{
			"name": "Paul Spencer",
			"city": "Fort Freidafield",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/671.jpg",
			"state": "VT",
			"country": "Kazakhstan",
			"physics": 11,
			"chemistry": 21,
			"maths": 6,
			"computer": 5
		}
		,
		{
			"name": "Joseph Bergnaum",
			"city": "Cartwrightworth",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg",
			"state": "VA",
			"country": "Jordan",
			"physics": 25,
			"chemistry": 2,
			"maths": 4,
			"computer": 9
		}
		,
		{
			"name": "Miss Arnold Kris",
			"city": "Goldnerfort",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
			"state": "VT",
			"country": "Rwanda",
			"physics": 7,
			"chemistry": 18,
			"maths": 13,
			"computer": 9
		}
		,
		{
			"name": "Wendell Labadie",
			"city": "Karellechester",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/903.jpg",
			"state": "CO",
			"country": "Namibia",
			"physics": 14,
			"chemistry": 19,
			"maths": 12,
			"computer": 15
		}
		,
		{
			"name": "Faye Raynor",
			"city": "Lake Darienfort",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
			"state": "FL",
			"country": "Mauritania",
			"physics": 15,
			"chemistry": 15,
			"maths": 8,
			"computer": 25
		}
		,
		{
			"name": "Mrs. Michael Haley",
			"city": "Fort Spencerview",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/709.jpg",
			"state": "ND",
			"country": "Niue",
			"physics": 13,
			"chemistry": 8,
			"maths": 6,
			"computer": 18
		}
		,
		{
			"name": "Salvatore Senger",
			"city": "Lake Hesterburgh",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1040.jpg",
			"state": "AL",
			"country": "Libyan Arab Jamahiriya",
			"physics": 18,
			"chemistry": 19,
			"maths": 15,
			"computer": 13
		}
		,
		{
			"name": "Monique Windler",
			"city": "West Wava",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg",
			"state": "RI",
			"country": "Liberia",
			"physics": 12,
			"chemistry": 19,
			"maths": 21,
			"computer": 12
		}
		,
		{
			"name": "Melissa Mertz",
			"city": "Medhurstville",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/284.jpg",
			"state": "NM",
			"country": "Egypt",
			"physics": 25,
			"chemistry": 21,
			"maths": 23,
			"computer": 1
		}
		,
		{
			"name": "Darin Leuschke",
			"city": "Hoover",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/978.jpg",
			"state": "IL",
			"country": "South Georgia and the South Sandwich Islands",
			"physics": 5,
			"chemistry": 21,
			"maths": 1,
			"computer": 7
		}
		,
		{
			"name": "Rosalie Lindgren",
			"city": "Kozeyland",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/638.jpg",
			"state": "IA",
			"country": "Republic of Korea",
			"physics": 23,
			"chemistry": 13,
			"maths": 25,
			"computer": 16
		}
		,
		{
			"name": "Micheal Streich",
			"city": "Lydaworth",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
			"state": "ID",
			"country": "Taiwan",
			"physics": 14,
			"chemistry": 19,
			"maths": 6,
			"computer": 4
		}
		,
		{
			"name": "Dana McGlynn",
			"city": "Alannacester",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg",
			"state": "NJ",
			"country": "Senegal",
			"physics": 19,
			"chemistry": 17,
			"maths": 0,
			"computer": 25
		}
		,
		{
			"name": "Christy Hessel",
			"city": "East Zander",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1233.jpg",
			"state": "ME",
			"country": "Guernsey",
			"physics": 19,
			"chemistry": 3,
			"maths": 21,
			"computer": 1
		}
		,
		{
			"name": "Stewart Hoppe",
			"city": "East Hayleeton",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/958.jpg",
			"state": "CO",
			"country": "Northern Mariana Islands",
			"physics": 2,
			"chemistry": 8,
			"maths": 20,
			"computer": 11
		}
		,
		{
			"name": "Olga Schmeler",
			"city": "Bechtelarside",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg",
			"state": "WI",
			"country": "French Southern Territories",
			"physics": 9,
			"chemistry": 10,
			"maths": 9,
			"computer": 13
		}
		,
		{
			"name": "Marco Brakus",
			"city": "South Hill",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1023.jpg",
			"state": "MD",
			"country": "Sao Tome and Principe",
			"physics": 0,
			"chemistry": 23,
			"maths": 23,
			"computer": 23
		}
		,
		{
			"name": "Peter Zulauf",
			"city": "Chicago",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1119.jpg",
			"state": "MA",
			"country": "Netherlands",
			"physics": 2,
			"chemistry": 17,
			"maths": 19,
			"computer": 0
		}
		,
		{
			"name": "Sally McKenzie",
			"city": "Boca Raton",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/134.jpg",
			"state": "VT",
			"country": "Mexico",
			"physics": 21,
			"chemistry": 5,
			"maths": 25,
			"computer": 13
		}
		,
		{
			"name": "Gregg Paucek",
			"city": "Cristopherview",
			"studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/731.jpg",
			"state": "NJ",
			"country": "Bhutan",
			"physics": 21,
			"chemistry": 14,
			"maths": 2,
			"computer": 10
		}
	];
	
	constructor(
		private fb: FormBuilder
	) {
        this.filter = this.fb.control("", { nonNullable: true });
	}
}
