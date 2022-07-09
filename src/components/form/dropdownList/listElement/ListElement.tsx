import { memo } from "react";
import { ListElementProps } from "../../../../interfaces/interfaces";
import { Element, ElementButton } from "../../../../styledComponents/form/ListElement";


const ListElement = (props: ListElementProps) => {
  const { element, selectElement } = props;

  const onClickHandler = () => {
    if (typeof element === "string") {
      return selectElement(element);
    }

    return selectElement(element.name);
  };

  return (
    <Element>
      <ElementButton type="button" onClick={onClickHandler}>
        {
          typeof element === "string" ? (
            element
          ) : (
            element.name
          )
        }
      </ElementButton>
    </Element>
  );
};

export default memo(ListElement);
