import {Component, Prop, h, Element, EventEmitter, Event} from '@stencil/core';

@Component({
    tag: 'idli-script-editor',
    styleUrl: 'idli-script-editor.scss',
    shadow: true
})
export class IdliScriptEditor {

    @Prop() value: string;

    /**
     * Type definitions as supplied through this attribute.
     */
    @Prop() extraLibs: string[];

    private editor: any;

    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    @Prop() disabled: boolean = false;

    @Prop() theme: 'light' | 'dark' = 'light';

    @Prop() language: 'javascript' | 'json' = 'javascript';

    @Element() private element: HTMLElement;

    async loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            document.head.appendChild(script);
            script.src = src;
            script.addEventListener('load', () => {
                resolve();
            });
        });
    }

    async componentWillLoad() {
        if (!window['monaco']) {
            window['require'] = {paths: {'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs'}};
            await this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/loader.js");
            await this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/editor/editor.main.nls.js");
            await this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/editor/editor.main.js");
        }
    }

    @Event() inputChange: EventEmitter;

    componentDidLoad() {
        setTimeout(() => {
            const $root = this.element.shadowRoot;
            const monaco = window['monaco'];

            monaco.languages.typescript.javascriptDefaults.addExtraLib(this.extraLibs);

            this.editor = monaco.editor.create($root.querySelector('.idli-script-editor-component'), {
                value: this.value,
                language: this.language,
                theme: 'vs-' + this.theme
            });

            this.editor.onDidChangeModelContent(() => {
                const oldValue = this.value;
                this.value = this.editor.getValue();
                this.inputChange.emit({event, oldValue, newValue: this.value});
            });
        }, 1000);

    }


    render() {
        return <div class="idli-script-editor-component"/>;
    }
}
