import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

// const employeeData = [
//   { name: "John Doe", salary: 30000 },
//   { name: "Jane Doe", salary: 80000 },
//   { name: "Alice Smith", salary: 15000 },
//   { name: "Bob Brown", salary: 120000 },
//   // Add more employee data objects here
// ];

const CustomBarChart = () => {
  const [empData, setEmpData] = useState(null);
  useEffect(() => {
    const getColor = (salary) => {
      if (salary < 20000) {
        return "#FF5733";
      } else if (salary > 100000) {
        return "#42FF33";
      } else {
        return "#3393FF";
      }
    };
    const getUserData = async () => {
      const response = await fetch(
        "https://react-http-c5a48-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json"
      ); // Fetch data from Firebase
      if (!response.ok) {
        throw new Error("Something went Wrong,");
      }
      const responseData = await response.json();
      const userData = [];
      for (const key in responseData) {
        userData.push({
          name: responseData[key].name,
          salary: responseData[key].salary,
          color: getColor(responseData[key].salary),
        });
      }

      setEmpData(userData);
    };

    getUserData();
  }, []);

  return (
    <>
      <Typography variant="h1" align="center" marginTop="24px">
        Salary Graph
      </Typography>
      <Typography variant="body1" align='center' color='blue' padding="10px">
        Graph to show relation between the salary of different employee.
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "300px",
          }}
        >
          <BarChart width={700} height={300} data={empData}>
            <XAxis dataKey="name" tickMargin={15} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="salary">
              {empData &&
                empData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    stroke={entry.color}
                    fill={entry.color}
                    strokeWidth={index === 2 ? 4 : 1}
                  />
                ))}
            </Bar>
          </BarChart>
        </Box>
      </Container>
    </>
  );
};

export default CustomBarChart;
