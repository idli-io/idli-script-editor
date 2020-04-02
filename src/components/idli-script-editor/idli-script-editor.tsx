import {Component, Prop, h, Element, EventEmitter, Event} from '@stencil/core';

@Component({
    tag: 'idli-script-editor',
    styleUrl: 'idli-script-editor.scss',
    shadow: true
})
export class IdliScriptEditor {
    /**
     * script.
     */
    @Prop() value: string;

    private editor: any;


    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    @Prop() disabled: boolean = false;

    @Prop() format: boolean = false;

    @Prop() theme: 'light' | 'dark' = 'light';

    @Element() private element: HTMLElement;

    async loadScript(src) {
        return new Promise( (resolve) => {
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
        const that = this;
        setTimeout(function() {
            const $root = that.element.shadowRoot;
            const monaco = window['monaco'];
            monaco.languages.typescript.javascriptDefaults.addExtraLib([
                'declare class Facts {',
                '    /**',
                '     * Returns the next fact',
                '     */',
                '    static next():string',
                '}'
            ].join('\n'));

            if (that.format)
                that.value = that.value.replace(/\\n/g, "\n");

            that.editor = monaco.editor.create($root.querySelector('.idli-script-editor-component'), {
                value: that.value,
                language: 'javascript',
                theme: 'vs-' + that.theme
            });
            that.editor.onDidChangeModelContent(() => {
                const oldValue = that.value;
                that.value = that.editor.getValue();
                that.inputChange.emit({event, oldValue, newValue: that.value});
            });
        }, 1000);

    }


    render() {
        return <div class="idli-script-editor-component"/>;
    }
}
