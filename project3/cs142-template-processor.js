"use strict";

class Cs142TemplateProcessor {
    constructor(templateStr) {
        this.templateStr = templateStr;
    }

    fillIn(dict) {
        const re = new RegExp("{{[^{]*}}", "g");
        let filledTemplate = this.templateStr;
        const match = filledTemplate.match(re);

        for (const placeholder of match) {
            const property = placeholder.replace("{{", "").replace("}}", "");
            if (dict[property] !== undefined) {
                filledTemplate = filledTemplate.replace(placeholder, dict[property]);
            } else {
                filledTemplate = filledTemplate.replace(placeholder, "");
            }
        }

        return filledTemplate;
    }
}

window.Cs142TemplateProcessor = Cs142TemplateProcessor;

// var Cs142TemplateProcessor = function (template) {
//     this.template = template;
// }

// Cs142TemplateProcessor.prototype.fillIn = function(dict) {
//     const re = new RegExp("{{[^{]*}}", "g");
//     let filledTemplate = this.template;
//     const match = filledTemplate.match(re);

//     for (const placeholder of match) {
//         const property = placeholder.replace("{{", "").replace("}}", "");
//         if (dict[property] !== undefined) {
//             filledTemplate = filledTemplate.replace(placeholder, dict[property]);
//         } else {
//             filledTemplate = filledTemplate.replace(placeholder, "");
//         }
//     }

//     return filledTemplate;
// }