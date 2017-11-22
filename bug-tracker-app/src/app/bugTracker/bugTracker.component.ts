import { Component } from '@angular/core';
import { IBug } from './models/IBug';

/*import { BugOperationsService } from './services/bugOperations.service';*/
import { BugStorageService } from './services/bugStorage.service';


@Component({
	selector : 'bug-tracker',
	template :  `
		<h1>Bug Tracker</h1>
		<hr>
		<bug-stats [data]="bugs"></bug-stats>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="bugSortBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="bugSortDescending">
		</section>
		<bug-edit (onNewBug)="onNewBugAdded($event)"></bug-edit>
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
					<div class="datetime">{{bug.createdAt | elapsed}}</div>
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

	

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onNewBugAdded(bug : IBug){
		this.bugs = [...this.bugs, bug];
	}

	onBugClick(bugToToggle : IBug){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugStorage.remove(bug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

}