// Type definitions for element-resize-detector 1.1.12
// Project: https://github.com/wnr/element-resize-detector
// Definitions by: Saransh Kataria <https://github.com/saranshkataria>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'element-resize-detector' {
    function elementResizeDetectorMaker(options?: elementResizeDetectorMaker.ErdmOptions)
                                            : elementResizeDetectorMaker.Erd;

    namespace elementResizeDetectorMaker {
        interface ErdmOptions {
        strategy?: 'scroll' | 'object';
        }

        interface Erd {
        listenTo(element: HTMLElement, callback: (elem: HTMLElement) => void): void;
        removeListener(element: HTMLElement, callback: (elem: HTMLElement) => void): void;
        removeAllListeners(element: HTMLElement): void;
        uninstall(element: HTMLElement): void;
        }
    }
    export = elementResizeDetectorMaker;
}
