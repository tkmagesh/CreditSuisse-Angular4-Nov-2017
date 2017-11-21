import { Component } from '@angular/core';
import { IBug } from './models/IBug';


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
			<select name="" id="">
				<option value=""></option>
				<option value=""></option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" name="" id="">
		</section>
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create New" (click)="onCreateClick(txtBugName.value)">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of bugs">
					<span class="bugname" (click)="onBugClick(bug)" [ngClass]="{closed : bug.isClosed}">
						{{bug | json}}
					</span>
					<div class="datetime">[Created At]</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		</section>
	`
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	onCreateClick(bugName : string){
		let newBug : IBug = {
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		}
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug){
		bug.isClosed = !bug.isClosed;
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