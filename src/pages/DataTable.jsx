import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid component

function MyTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    

    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-c5a48-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json"
      ); // Fetch data from Firebase
      if(!response.ok){
        throw new Error("Something went Wrong,");
      }
      const responseData = await response.json();
      const userData = [];
      for (const key in responseData) {
        userData.push({
          id: key,
          name: responseData[key].name,
          age: responseData[key].age,
          job: responseData[key].job,
          salary: responseData[key].salary,
          city: responseData[key].city,
        })
      }
      const formattedData = Object.entries(userData).map(([key, value]) => ({
        id: key,
        ...value,
      })); // Format data for DataGrid
      setTableData(formattedData);
    };

    fetchData(); // Call the function on component mount
  },); // Add database as a dependency to refetch on updates

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    // Add more columns here based on your data structure
    { field: "name", headerName: "Name", width: 150 },
    { field: "job", headerName: "Job Title", width: 200 },
    { field: "age", headerName: "Age", width: 200 },
    { field: "city", headerName: "City", width: 200 },
    { field: "salary", headerName: "Title", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} rowsPerPageOptions={[5]} />
    </div>
  );
}

export default MyTable;
