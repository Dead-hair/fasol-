// Изначальное количество фасолин
let whiteBeans = 75;
let blackBeans = 150;

// Симуляция процесса
while (whiteBeans + blackBeans > 1) {
    if (whiteBeans >= 2) {
        // Условие: если есть две белые фасолины
        whiteBeans -= 2; // Убираем две белые фасолины
        if (blackBeans > 0) {
            blackBeans--; // Добавляем одну черную фасолину в горшок
        }
        whiteBeans++; // Одна белая фасолина возвращается
    } else if (whiteBeans >= 1 && blackBeans >= 1) {
        // Условие: если есть хотя бы одна белая и одна черная фасолина
        blackBeans--; // Черная фасолина выбрасывается
    } else if (blackBeans >= 2) {
        // Условие: если есть две черные фасолины
        blackBeans--; // Черная фасолина выбрасывается
    }
}

// Результат
const result = whiteBeans === 1 ? "Белый горошек остался" : "Черный горошек остался";
document.write(result);
