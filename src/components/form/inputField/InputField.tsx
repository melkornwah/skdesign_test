import { ChangeEvent, memo, useState, useEffect } from "react";
import { InputFieldProps } from "../../../interfaces/interfaces";
import NumberFormat from "react-number-format";
import { Input, InputWrapper } from "../../../styledComponents/form/InputField";
import { ErrorMessage } from "../../../styledComponents/form/ErrorMessage";
import { MainFieldContainer } from "../../../styledComponents/form/MainFieldContainer";
import { FieldLabel } from "../../../styledComponents/form/FieldLabel";

const InputField = (props: InputFieldProps) => {
  const {
    name,
    labelText,
    placeholder,
    small,
    required,
    value,
    handleFieldChange,
    setIsFormTouched,
    handleErrorChange,
    error,
    mask,
    isFormTouched,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const hasError = error && isTouched;

  const handleValidation = (newValue: string) => {
    switch (name) {
      case "name":
        setIsInvalid(newValue.length < 2);

        break;
      case "phone":
        const trimmedValud = newValue.replace(/\s/g, "");

        setIsInvalid(trimmedValud.length !== 16);

        break;
      case "email":
        setIsInvalid(!/.+@.+\..+/.test(newValue));

        break;
      case "instagram":
        setIsInvalid(newValue.length < 3);

        break;
      default:
        break;
    }
  };

  const handleChange = async (newValue: string) => {
    if (required && isFormTouched) {
      handleValidation(newValue);
    }

    setIsTouched(true);
    setIsFormTouched(true);
    handleFieldChange(name, newValue);
  };

  const handleBlur = () => {
    setIsFormTouched(true);
    setIsTouched(true);
    setIsFocused(false);
  };

  useEffect(() => {
    if (isTouched) {
      if (required && isTouched) {
        return handleErrorChange(name, required, isTouched, isInvalid);
      }
  
      return handleErrorChange(name, required, isTouched);
    }
  }, [value, isTouched, isInvalid, required, name]);

  useEffect(() => {
    if (!isFormTouched) {
      setIsTouched(false);
    }
  }, [isFormTouched]);

  return (
    <MainFieldContainer>
      <InputWrapper small={!!small} isFocused={isFocused} hasError={hasError}>
        <FieldLabel htmlFor={name} isFocused={isFocused} hasError={hasError}>{labelText}</FieldLabel>
        {
          mask ? (
            <NumberFormat
              name={name}
              id={name}
              placeholder={placeholder}
              format={mask}
              onValueChange={(values) => {
                handleChange(values.formattedValue);
              }}
              value={value}
              onFocus={() => {
                setIsFocused(true);
                setIsFormTouched(true);
              }}
              onBlur={handleBlur}
              customInput={Input}
            />
          ) : (
            <Input
              name={name}
              id={name}
              placeholder={placeholder}
              onChange={(evt: ChangeEvent) => {
                const target = evt.target as HTMLInputElement;

                handleChange(target.value);
              }}
              value={value}
              onFocus={() => {
                setIsFocused(true);
                setIsFormTouched(true);
              }}
              onBlur={handleBlur}
            />
          )
        }
      </InputWrapper>
      {
        hasError && (
          <ErrorMessage>
            {
              !value ? (
                "Обязательное поле"
              ) : (
                "Неверно заполненное поле"
              )
            }
          </ErrorMessage>
        )
      }
    </MainFieldContainer>
  );
};

export default memo(InputField);
