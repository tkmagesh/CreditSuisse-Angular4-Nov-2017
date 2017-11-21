import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string) : IBug{
		let newBug : IBug = {
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		}
		return newBug;
	}

	toggle(bug : IBug) : void{
		bug.isClosed = !bug.isClosed;
	}
}