import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action';
import { tutorial } from '../models/tutorial.model';

export class TutorialsStateModel {
  tutorials: tutorial[];
}

@State<TutorialsStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: [],
  },
})
export class TutorialState {
  @Selector()
  static getTutorials(state: TutorialsStateModel) {
    return state.tutorials;
  }

  @Action(AddTutorial)
  add(
    { getState, patchState }: StateContext<TutorialsStateModel>,
    { payload }: AddTutorial
  ) {
    const state = getState();
    patchState({
      tutorials: [...state.tutorials, payload],
    });
  }

  @Action(RemoveTutorial)
  remove(
    { getState, patchState }: StateContext<TutorialsStateModel>,
    { payload }: AddTutorial
  ) {
    patchState({
      tutorials: [
        ...getState().tutorials.filter((a) => a.name != payload.name),
      ],
    });
  }
}
