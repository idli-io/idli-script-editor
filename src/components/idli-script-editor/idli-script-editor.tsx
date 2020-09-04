import {Component, Element, Event, EventEmitter, h, Prop, Watch} from '@stencil/core';

function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
        let context = this;
        let args = arguments;

        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

@Component({
    tag: 'idli-script-editor',
    styleUrl: 'idli-script-editor.scss',
    shadow: true
})
export class IdliScriptEditor {

    /**
     * The input field label.
     */
    @Prop() label: string;

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

    @Prop() language: 'javascript' | 'json' | 'html' = 'javascript';

    /**
     * If true, the form will be in inline format. Defaults to `false`.
     */
    @Prop() inline: boolean = false;

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
        const that = this;

        setTimeout(() => {
            const $root = this.element.shadowRoot;
            const monaco = window['monaco'];

            //monaco.languages.typescript.javascriptDefaults.addExtraLib(this.extraLibs);

            monaco.editor.defineTheme('disabled-theme', {
                base: 'vs',
                inherit: true,
                rules: [{background: 'EDF9FA'}],
                colors: {
                    'editor.background': '#c7c6d3'
                }
            });

            this.editor = monaco.editor.create($root.querySelector('.idli-script-editor-component'), {
                value: this.value,
                language: this.language,
                theme: this.getTheme(),
                readOnly: this.disabled
            });


            this.editor.onDidChangeModelContent(debounce(() => {
                const oldValue = that.value;
                that.value = that.editor.getValue();
                that.inputChange.emit({event, oldValue, newValue: that.value});
            }, 250, false));


        }, 1000);

    }

    getTheme() {
        let theme = 'vs-' + this.theme;
        if (this.disabled)
            theme = 'disabled-theme';
        return theme;
    }

    @Watch('disabled')
    watchDisabled(newValue: string) {
        this.editor.updateOptions({readOnly: newValue});
        window['monaco'].editor.setTheme(this.getTheme());
    }

    @Watch('value')
    watchValue(newValue: string) {
        if (this.editor.getValue() !== this.value) {
            this.editor.setValue(newValue);
        }
    }

    getInlineClass() {
        let inline = "";
        if (this.inline)
            inline = 'inline';
        return inline;
    }

    getLabelElement() {
        if (this.label)
            return <label class="label">{this.label}</label>;
    }

    private getInputElement() {
        return <div class="idli-script-editor-component"/>;
    }

    render() {
        return <div class={"idli-script-component  " + this.getInlineClass()}>
            {[this.getLabelElement(), this.getInputElement()]}
        </div>;
    }
}
