export default {
    generateYears: () => {
        const startYear = 2010;
        const endYear = 2050;
        let years = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push({ label: year.toString(), value: year.toString() });
        }
        return years;
    }
}
