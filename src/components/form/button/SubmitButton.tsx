import { memo } from "react";
import { SubmitButtonProps } from "../../../interfaces/interfaces";
import { Button } from "../../../styledComponents/form/SubmitButton";
import Preloader from "../../preloader/Preloader";

const Heading = (props: SubmitButtonProps) => {
  const { isDisabled, isSubmitting, isFullSize } = props;

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      isSubmitting={isSubmitting}
      isFullSize={isFullSize}
    >
      {
        isSubmitting ? (
          <Preloader />
        ) : (
          "Отправить заявку"
        )
      }
    </Button>
  );
};

export default memo(Heading);
