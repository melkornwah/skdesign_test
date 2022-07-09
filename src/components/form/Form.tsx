import { FormEvent, memo, useState } from "react";
import ToggleExtentionButton from "./button/ToggleExtentionButton";
import SubmitButton from "./button/SubmitButton";
import { initialFields, additionalFields } from "./formSchema";
import { useDispatch, useSelector } from 'react-redux';
import { changeFieldValue } from "../../features/formReducer";
import { FormWrapper } from "../../styledComponents/form/Form";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  instagram: "",
  city: "",
  company: "",
  reciever: "",
  source: "",
};

const initialErrors = {
  name: true,
  phone: true,
  email: true,
  instagram: true,
  city: true,
};

const Form = () => {
  const [isExtendedForm, setIsExtendedForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isFormTouched, setIsFormTouched] = useState(false);

  const dispatch = useDispatch();

  const formData = useSelector((state: any) => state.form);

  const toggleIsExtendedForm = () => {
    setIsExtendedForm(!isExtendedForm);
  };

  const handleFieldChange = async (fieldName: string, value: string) => {
    setIsFormTouched(true);
    setValues({ ...values, [fieldName]: value});
    dispatch(changeFieldValue({ fieldName, value }))
  };

  const handleErrorChange = (fieldName: string, required: boolean, isTouched: boolean, value?: boolean) => {
    const fieldValue = values[fieldName as keyof typeof values];

    if (required && isTouched && !fieldValue) {
      return setErrors({ ...errors, [fieldName]: value || true});
    }

    return setErrors({ ...errors, [fieldName]: value || false});
  };

  const isFormInvalid = Object.values(errors).includes(true);

  const isSubmitButtonDisabled = isFormInvalid || !isFormTouched || isSubmitting;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false);
      setValues(initialValues);
      setErrors(initialErrors);
      setIsFormTouched(false);
      const formattedDataJSON = JSON.stringify(formData);
      console.log(formattedDataJSON);
    }, 2000);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {
        initialFields.map(({Component, ...props}) => {
          return (
            <Component
              setIsFormTouched={setIsFormTouched}
              key={props.name}
              value={values[props.name as keyof typeof values]}
              error={errors[props.name as keyof typeof errors]}
              handleFieldChange={handleFieldChange}
              handleErrorChange={handleErrorChange}
              isFormTouched={isFormTouched}
              {...props}
            />
          );
        })
      }
      <ToggleExtentionButton onClick={toggleIsExtendedForm} isActive={isExtendedForm} />
      {
        isExtendedForm && (
          additionalFields.map(({Component, ...props}) => {
            return (
              <Component
                key={props.name}
                value={values[props.name as keyof typeof values]}
                handleFieldChange={handleFieldChange}
                setIsFormTouched={setIsFormTouched}
                handleErrorChange={handleErrorChange}
                isFormTouched={isFormTouched}
                {...props}
              />
            );
          })
        )
      }
      <SubmitButton isFullSize isSubmitting={isSubmitting} isDisabled={isSubmitButtonDisabled} />
    </FormWrapper>
  );
};

export default memo(Form);
