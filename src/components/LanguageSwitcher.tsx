import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/store/languageSlice";
import { useTranslation } from "react-i18next";
import { RootState } from "@/store";

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLanguage = useSelector((state: RootState) => state.language.language);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <div className="flex items-center">
      <select
        value={currentLanguage}
        onChange={changeLanguage}
        className="bg-gray-700 text-white px-3 py-1 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
