export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    })
}

export const scrollToTopSmooth = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

export function calculatePrice(mrp, discount){
    return mrp-(mrp*discount/100);
}