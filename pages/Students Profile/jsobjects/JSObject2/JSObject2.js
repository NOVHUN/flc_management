export default {
    async submitData() {
        try {
            // Fetch the last row to find the last ID
            const sheetData = await show_all_student.getSheetData();
            const dataLength = sheetData.data.length;
            let newId = 1;

            if (dataLength > 0) {
                const lastRow = sheetData.data[dataLength - 1];
                if (lastRow && lastRow.ID) {
                    newId = parseInt(lastRow.ID, 10) + 1;
                }
            }

            // Data to submit
            const formData = {
                ID: newId, // New unique ID
                Name: appsmith.store.formData.name,
                Email: appsmith.store.formData.email,
                // Add other form fields here
            };

            // Append data to Google Sheet
            await show_all_student.appendRow(formData);

            return "Data Submitted Successfully!";
        } catch (error) {
            console.error("Error submitting data:", error);
            return "Failed to submit data.";
        }
    }
}
