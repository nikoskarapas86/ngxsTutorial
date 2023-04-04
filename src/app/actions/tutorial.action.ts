import { tutorial } from '../models/tutorial.model';

export class AddTutorial {
  static readonly type = '[TUTORIAL] Add';
  constructor(public payload: tutorial) {}
}

export class RemoveTutorial {
  static readonly type = '[TUTORIAL] Remove';
  constructor(public payload: tutorial) {}
}
