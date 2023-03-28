import {IIdeaType} from './idea-type';

export class Theme implements IIdeaType {
    typeName: string = 'Theme';
    description: string = 'The central topics, subjects, or messages of the game.';
    backgroundColor: string = '#642F82';
    iconColor: string = '#B5739E';
}
