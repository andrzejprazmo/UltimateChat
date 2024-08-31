import { FormControl, FormGroup } from "@angular/forms"

export interface ChatRoomModel {
    connectionId: string,
    chatRoom: string
}

export declare type ChatRoomForm = FormGroup<{
    chatRoom: FormControl<string | null>;
}>;

