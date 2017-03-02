import {PropertyList} from '../Node';
import {AMmlNode, AttributeList} from '../MmlNode';

export class MmlMath extends AMmlNode {
    static defaults: PropertyList = {
        ...AMmlNode.defaults,
        mathvariant: "normal",
        mathsize: "normal",
        mathcolor: "", // should be "black", but allow it to inherit from surrounding text
        mathbackground: "transparent",
        dir: "ltr",
        scriptlevel: 0,
        displaystyle: false,
        display: "inline",
        maxwidth: "",
        overflow: "linebreak",
        altimg: "",
        'altimg-width': "",
        'altimg-height': "",
        'altimg-valign': "",
        alttext: "",
        cdgroup: "",
        scriptsizemultiplier: Math.sqrt(1/2),
        scriptminsize: "8px",    // should be 8pt, but that's too big
        infixlinebreakstyle: "before",
        lineleading: "1ex",
        indentshift: "auto",     // use user configuration
        indentalign: "auto",
        indentalignfirst: "indentalign",
        indentshiftfirst: "indentshift",
        indentalignlast:  "indentalign",
        indentshiftlast:  "indentshift"
    };
    static defaultProperties: PropertyList = {
        decimalseparator: ".",
        texprimestyle: false     // is it in TeX's C' style?
    };
    get kind() {return 'math'}
    get arity() {return -1}
    get linebreakContainer() {return true}

    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean) {
        attributes = this.addInheritedAttributes(attributes, this.getAttributes());
        display = this.Get('display') === 'block' || !!this.Get('displaystyle');
        level = this.Get('scriptlevel') as number || 0;
        super.setChildInheritedAttributes(attributes, display, level, prime);
    }
}
