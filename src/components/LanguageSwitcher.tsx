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
    <div className="relative">
      <select
        value={currentLanguage}
        onChange={changeLanguage}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer hover:bg-gray-700"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;