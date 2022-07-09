interface DropdownListProps {
  name: string,
  labelText: string,
  setIsFormTouched: Function,
  value: string,
  handleFieldChange: Function,
  handleErrorChange: Function,
  isFormTouched: boolean,
  error?: boolean,
  required?: boolean,
  listElements?: Array<string> | Array<{ id: string, name: string }>,
}

interface InputFieldProps {
  name: string,
  labelText: string,
  setIsFormTouched: Function,
  value: string,
  handleFieldChange: Function,
  handleErrorChange: Function,
  isFormTouched: boolean,
  error?: boolean,
  placeholder?: string,
  small?: boolean,
  required?: boolean,
  mask?: string,
}

interface ListElementProps {
  element: { id: string, name: string } | string,
  selectElement: Function,
}

interface SubmitButtonProps {
  isDisabled: boolean,
  isFullSize: boolean,
  isSubmitting: boolean,
};

interface ToggleExtentionProps {
  onClick: Function,
  isActive: boolean,
};

export type {
  DropdownListProps,
  InputFieldProps,
  ListElementProps,
  SubmitButtonProps,
  ToggleExtentionProps,
};
