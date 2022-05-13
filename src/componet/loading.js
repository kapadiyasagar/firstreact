import React from 'react';

function Loading(Component) {

    return function withLoadinganyComponent({isLoading,data}){

        console.log(isLoading,data);
        if(isLoading){
            return(
                <p>loading......</p>
            )
        }
        else{
            return(
                <Component data={data}/>
            )
        }
    }

    return (
        <div>
            
        </div>
    );
}

export default Loading;