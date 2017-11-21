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

	toggle(bugToToggle : IBug) : IBug {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return toggledBug;
	}
}