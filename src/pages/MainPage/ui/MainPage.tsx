import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation()
    return (
        <div>
            {t("MainPage")}
            {t("MainPage 123")}
        </div>
    );
};

export default MainPage;