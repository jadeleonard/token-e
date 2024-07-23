const Button = (props) => {
    const button = document.createElement('button');
    if (props.class)
        button.className = props.class;
    if (props.id)
        button.id = props.id;
    if (props.name)
        button.name = props.name;
    if (props.title)
        button.title = props.title;
    if (props.textContent)
        button.textContent = props.textContent;
    if (props.formnovalidate)
        button.formNoValidate = props.formnovalidate;
    if (props.formaction)
        button.formAction = props.formaction;
    if (props.formtarget)
        button.formTarget = props.formtarget;
    if (props.style)
        button.style.cssText = props.style;
    if (props.autofocus)
        button.autofocus = props.autofocus;
    if (props.disabled)
        button.disabled = props.disabled;
    if (props.type)
        button.type = props.type;
    if (props.value)
        button.value = props.value;
    return button;
};
export default Button;
