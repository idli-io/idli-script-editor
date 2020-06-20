/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IdliScriptEditor {
    /**
    * If true, the user cannot interact with the button. Defaults to `false`.
    */
    'disabled': boolean;
    /**
    * Type definitions as supplied through this attribute.
    */
    'extraLibs': string[];
    /**
    * If true, the form will be in inline format. Defaults to `false`.
    */
    'inline': boolean;
    /**
    * The input field label.
    */
    'label': string;
    'language': 'javascript' | 'json' | 'html';
    'theme': 'light' | 'dark';
    'value': string;
  }
}

declare global {


  interface HTMLIdliScriptEditorElement extends Components.IdliScriptEditor, HTMLStencilElement {}
  var HTMLIdliScriptEditorElement: {
    prototype: HTMLIdliScriptEditorElement;
    new (): HTMLIdliScriptEditorElement;
  };
  interface HTMLElementTagNameMap {
    'idli-script-editor': HTMLIdliScriptEditorElement;
  }
}

declare namespace LocalJSX {
  interface IdliScriptEditor {
    /**
    * If true, the user cannot interact with the button. Defaults to `false`.
    */
    'disabled'?: boolean;
    /**
    * Type definitions as supplied through this attribute.
    */
    'extraLibs'?: string[];
    /**
    * If true, the form will be in inline format. Defaults to `false`.
    */
    'inline'?: boolean;
    /**
    * The input field label.
    */
    'label'?: string;
    'language'?: 'javascript' | 'json' | 'html';
    'onInputChange'?: (event: CustomEvent<any>) => void;
    'theme'?: 'light' | 'dark';
    'value'?: string;
  }

  interface IntrinsicElements {
    'idli-script-editor': IdliScriptEditor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'idli-script-editor': LocalJSX.IdliScriptEditor & JSXBase.HTMLAttributes<HTMLIdliScriptEditorElement>;
    }
  }
}


