
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
    
      setTimeout(() => {
        const userData = {
          id: userId,
          name: "John Doe",
          age: 30,
          email: "johndoe@example.com"
        };
        const isSuccess = Math.random() > 0.5;
  
        if (isSuccess) {
          resolve(userData);  
        } else {
          reject("Failed to fetch user data.");  
        }
      }, 2000);
    });
  }
  const userId = 1;
  
  fetchUserData(userId)
    .then((data) => {
      console.log("User data fetched successfully:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    })
    .finally(() => {
        console.log("Api call finished");
    });
   