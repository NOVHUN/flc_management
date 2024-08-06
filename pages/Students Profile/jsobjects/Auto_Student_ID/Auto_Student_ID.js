export default {
    CountStudentID() {
        // Ensure the data is loaded from the query
        const data = show_all_student?.data ?? [];
        
        // Count all data
        const count = data.length + 1;

        return `FLC-${String(count).padStart(5, '0')}`;
    }
}
