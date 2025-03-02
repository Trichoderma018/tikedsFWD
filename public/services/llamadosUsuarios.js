async function getProducts() {
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getProducts };

//////////LLAMADO POST//////////

async function postUser(pass, email, username) {
    try {
     
        const usertData = { 
            pass, 
            email, 
            username
        };



        const response = await fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usertData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postUser}

//////////////LLAMADO UPDATE/////////////


async function updateUsers(nombre,apellido,edad,id) 
{
    try {
     
        const userData = { 
            nombre, 
            apellido,
            edad
        
        };


        


        const response = await fetch("http://localhost:3000/products/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateUsers}



//////////////LLAMADO DELETE/////////////


async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting product with id ${id}`);
        }

        return { message: `product with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

export { deleteProduct };