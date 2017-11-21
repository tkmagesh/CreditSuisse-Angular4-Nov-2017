import { Component } from '@angular/core';
import { IBug } from './models/IBug';

import { BugOperationsService } from './services/bugOperations.service';



@Component({
	selector : 'bug-tracker',
	template :  `
		<h1>Bug Tracker</h1>
		<hr>
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="bugSortBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="bugSortDescending">
		</section>
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
		<input type="button" value="Create New" (click)="onCreateClick()">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of ( bugs | sort:bugSortBy:bugSortDescending) ">
					<span class="bugname" 
						(click)="onBugClick(bug)" 
						[ngClass]="{closed : bug.isClosed}"
						[title]="bug.name"
					>
						{{bug.name | trimText:40 }}
					</span>
					<div class="datetime">{{bug.createdAt | date:'dd-MMM-yyyy hh:mm:ss a'}}</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		</section>
	`
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	bugSortBy : string = '';
	bugSortDescending : boolean = false;

	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Application not responsive'));
	}

	onCreateClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bug : IBug){
		this.bugOperations.toggle(bug);
	}
	onRemoveClosedClick(){
		for(var index = this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	getClosedCount(){
		let closedCount = 0;
		for(let index =0, count = this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}