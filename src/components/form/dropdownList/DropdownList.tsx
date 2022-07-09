import { memo, useEffect, useState } from "react";
import { DropdownListProps } from "../../../interfaces/interfaces";
import ListElement from "./listElement/ListElement";
import arrowIcon from "../../../images/arrow_icon.svg";
import { MainFieldContainer } from '../../../styledComponents/form/MainFieldContainer';
import { InputWrapper } from "../../../styledComponents/form/InputField";
import { ArrowDown } from "../../../styledComponents/form/ArrowIcon";
import { Button, ButtonLabel, List, ButtonText } from "../../../styledComponents/form/DropdownList";
import { ErrorMessage } from "../../../styledComponents/form/ErrorMessage";

const DropdownList = (props: DropdownListProps) => {
  const {
    listElements,
    labelText,
    name,
    required,
    value,
    handleFieldChange,
    setIsFormTouched,
    handleErrorChange,
    error,
    isFormTouched,
  } = props;

  const [isListOpened, setIsListOpened] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const hasError = error && isTouched;

  const handleElementSelection = (element: string) => {
    setIsListOpened(false);
    setIsFormTouched(true);
    handleFieldChange(name, element);
  };

  useEffect(() => {
    const handleOutsideClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
  
      if (target.attributes[0].nodeValue !== name && isListOpened) {
        setIsTouched(true);
        setIsListOpened(false);
        setIsFormTouched(true);
      }
    };

    if (isListOpened) {
      document.body.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    }
  }, [isListOpened, name, setIsFormTouched]);

  useEffect(() => {
    if (isFormTouched) {
      handleErrorChange(name, required, isTouched);
    }
  }, [isTouched, name, required, value]);

  useEffect(() => {
    if (!isFormTouched) {
      setIsTouched(false);
      setIsListOpened(false);
    }
  }, [isFormTouched]);

  return (
    <MainFieldContainer>
      <InputWrapper small={false} isFocused={isListOpened} hasError={hasError}>
        <ArrowDown src={arrowIcon} alt="Открыть выпадающий список" isFocused={isListOpened} />
        <Button
          name={name}
          type="button" 
          onClick={() => {
          setIsListOpened(!isListOpened);
        }}>
          <ButtonLabel
            isFocused={isListOpened}
            isSelected={!!value}
            hasError={hasError}
          >
              {labelText}
            </ButtonLabel>
          <ButtonText>{value}</ButtonText>
        </Button>
        {
          isListOpened && (
            <List>
              {
                listElements && (
                  listElements.map(
                    (listElement: { id: string, name: string } | string) => {
                      const key = typeof listElement === "string" ? listElement : listElement.id;
                      return <ListElement key={key} selectElement={handleElementSelection} element={listElement} />
                    }
                  )
                )
              }
            </List>
          )
        }
      </InputWrapper>
      {
        hasError && (
          <ErrorMessage>Обязательное поле</ErrorMessage>
        )
      }
    </MainFieldContainer>
  );
};

export default memo(DropdownList);
