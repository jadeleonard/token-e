const Input = (props) => {
    const input = document.createElement('input');
    if (props.type)
        input.type = props.type;
    if (props.name)
        input.name = props.name;
    if (props.value !== undefined)
        input.value = String(props.value); // Ensure value is a string
    if (props.id)
        input.id = props.id;
    if (props.class)
        input.className = props.class;
    if (props.style)
        input.style.cssText = props.style;
    if (props.title)
        input.title = props.title;
    if (props.disabled)
        input.disabled = props.disabled;
    if (props.readonly)
        input.readOnly = props.readonly;
    if (props.placeholder)
        input.placeholder = props.placeholder;
    if (props.maxlength)
        input.maxLength = props.maxlength;
    if (props.minlength)
        input.minLength = props.minlength;
    if (props.size)
        input.size = props.size;
    if (props.autocomplete)
        input.autocomplete = props.autocomplete;
    if (props.required)
        input.required = props.required;
    if (props.pattern)
        input.pattern = props.pattern;
    if (props.min !== undefined)
        input.min = String(props.min); // Ensure min is a string
    if (props.max !== undefined)
        input.max = String(props.max); // Ensure max is a string
    if (props.step !== undefined)
        input.step = String(props.step);
    if (props.accept)
        input.accept = props.accept;
    if (props.form)
        input.setAttribute('form', props.form); // Set form attribute
    if (props.formaction)
        input.setAttribute('formaction', props.formaction);
    if (props.formenctype)
        input.setAttribute('formenctype', props.formenctype);
    if (props.formmethod)
        input.setAttribute('formmethod', props.formmethod);
    if (props.formnovalidate)
        input.setAttribute('formnovalidate', props.formnovalidate.toString());
    if (props.formtarget)
        input.setAttribute('formtarget', props.formtarget);
    if (props.autofocus)
        input.autofocus = props.autofocus;
    if (props.multiple)
        input.multiple = props.multiple;
    if (props.capture)
        input.capture = props.capture;
    return input;
};
export default Input;
