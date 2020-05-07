// Obtiene la diferencia de anios entre el anio actual y el ingresado 
export const getDifferenceYear = (year) => {
    return new Date().getFullYear() - year;
}

// Obtiene el incremento a pagar segun la marca
export const getIncrementByBrand = (brand) => {
    let increment;

    switch (brand) {
        case 'European':
            increment = 1.30;
            break;

        case 'American':
            increment = 1.15;
            break;

        case 'Asian':
            increment = 1.05;
            break;

        default:
            break;
    }
    return increment;
}

// Obtiene el incremento por tipo de seguro
export const getIncrementByPlan = (plan) => {
    return (plan === 'basic') ? 1.20 : 1.50;
}