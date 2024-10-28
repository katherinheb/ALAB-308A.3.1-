import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

// part 1
export async function getUserInfo(id) {
  try {
    
    const dbName = await central(id);
e
    let userData;
    switch (dbName) {
      case 'db1':
        userData = await db1(id);
        break;
      case 'db2':
        userData = await db2(id);
        break;
      case 'db3':
        userData = await db3(id);
        break;
      default:
        throw new Error(`Unknown database returned from central for user ${id}`);
    }

    const pData = await vault(id);

    const userInfo = {
      id: id,
      name: pData.name,
      username: userData.username,
      email: data.email,
      address: pData.address,
      phone: pData.phone,
      website: userData.website,
      company: userData.company
    };

    return userInfo;
  } catch (error) {
    throw new Error(`Failed to retrieve user information for user ${id}: ${error.message}`);
  }
}