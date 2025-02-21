
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe", age: 30 };
        resolve(data); 
      }, 2000); 
    });
  }
  async function getUserData() {
    console.log("Fetching data...");
    
    try {
      const userData = await fetchData(); 
      console.log("Data fetched successfully:", userData); 
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }
  getUserData();
  