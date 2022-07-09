import { memo } from "react";
import DescriptionText from "../../styledComponents/description/DescriptionText";
import InfoWrapper from "../../styledComponents/description/InfoWrapper";

const Description = () => {
  return (
    <InfoWrapper>
      <DescriptionText>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, 
        архитекторов и декораторов, дизайн-бюро и интерьерные студии — 
        все, кто дизайн интерьера сделали своим призванием.
      </DescriptionText>
      <DescriptionText>
        Ознакомиться с проектами можете в нашем портфолио. 
        Если Вы оформляете интерьеры жилых или коммерческих помещений — 
        мы с радостью поможем Вам: составим уникальные условия сотрудничества, 
        предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.
      </DescriptionText>
      <DescriptionText>
        Партнерство мы видим как доверительные отношения, 
        основанные на честности реализации бизнес идей в сфере создания и продаж современной, 
        качественной, удобной, функциональной и эксклюзивной мебели.
      </DescriptionText>
    </InfoWrapper>
  );
};

export default memo(Description);
