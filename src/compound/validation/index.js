import React, { useContext, useEffect, useState } from "react";
import styles from './index.module.css';

// export const ValidationContext = React.createContext();
// export const ValidationContextProvider = ValidationContext.Provider;

export const Validation = ({children, error}) => {
    return (
        <span className={styles.wrapper}>
            {children}
            {Boolean(error) && <span className={styles.error}>{error}</span>}
        </span>
    )
};

// export const Validation = ({children, value, configName}) => {
//     const {config, setError} = useContext(ValidationContext);
//     // Логика валдиции здесь
//     // data.setError((oldConfig) => {
//     //     {
//     //         ...oldConig,
//     //         [configName]: {
//     //             error: 'asdasd',
//     //             isValid: false
//     //         }
//     //     }
//     // })
//     console.log(data);
//     return (
//         <span className={styles.wrapper}>
//             {children}
//             {Boolean(error) && <span className={styles.error}>{error}</span>}
//         </span>
//     )
// };

// const config = {
//     login: [ONLY_NUMBERS, NO_SPACES],
//     password: [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES]
// };
// export const ValidationZone = ({children, config}) => {
//     const [config, setConfig] = useState(() => 
//         Object.fromEntries(
//             Object.keys(config).map((val) =>
//                 [val, {error: '', isValid: true, [ONE_SPACE]}])
//         )
//     );
    // stateIsOverallValid ===>>> проверяем есть ли кто то не валидный из конфига
        //   useEffect(() => {
            // здесь меняем stateIsOverallValid
        //   }, [config]);
    
//     return <ValidationContextProvider value={{config, setError}}>
//         {children(stateIsOverallValid)}
//     </ValidationContextProvider>
// };


// export const useValidation = () => {
//     const ValidationContext = React.createContext();
//     const ValidationContextProvider = ValidationContext.Provider;

//     // рожаем новый конекст
//     // на основе нового контекста создаем ValidationZone Validation

//     return [ValidationZone, Validation];
// };