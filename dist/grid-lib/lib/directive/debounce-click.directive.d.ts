import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DebounceClickDirective implements OnInit, OnDestroy {
    debounceTime: number;
    debounceClick: EventEmitter<any>;
    private clicks;
    private subscription;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    clickEvent(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DebounceClickDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DebounceClickDirective, "[appDebounceClick]", never, { "debounceTime": "debounceTime"; }, { "debounceClick": "debounceClick"; }, never>;
}
//# sourceMappingURL=debounce-click.directive.d.ts.map