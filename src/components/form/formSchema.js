import DropdownList from "./dropdownList/DropdownList";
import InputField from "./inputField/InputField";
import cities from "../../vendor/cities.json";
import sources from "../../vendor/sources.json";

export const initialFields = [
  {
    name: "name",
    labelText: "Ваше имя *",
    placeholder: "Иван",
    small: true,
    required: true,
    validation: {
      minLength: 2,
    },
    Component: InputField,
  },
  {
    name: "phone",
    labelText: "Номер телефона *",
    placeholder: "+7 (000) 000-00-00",
    small: true,
    required: true,
    mask: "+7 (###) ###-##-##",
    validation: {
      length: 18,
    },
    Component: InputField,
  },
  {
    name: "email",
    labelText: "E-mail *",
    placeholder: "example@skdesign.ru",
    small: true,
    required: true,
    validation: {
      regex: /.+@.+\..+/,
    },
    Component: InputField,
  },
  {
    name: "instagram",
    labelText: "Ссылка на профиль *",
    placeholder: "instagram.com/skde...",
    small: true,
    required: true,
    validation: {
      minLength: 3,
    },
    Component: InputField,
  },
  {
    name: "city",
    labelText: "Выберите город *",
    listElements: cities,
    required: true,
    Component: DropdownList,
  },
  {
    name: "company",
    labelText: "Название организации/студии",
    placeholder: "SK Design",
    Component: InputField,
  },
];

export const additionalFields = [
  {
    name: "reciever",
    labelText: "Получатель",
    placeholder: "ФИО",
    Component: InputField,
  },
  {
    name: "source",
    labelText: "От куда узнали про нас?",
    listElements: sources,
    Component: DropdownList,
  },
];
