import React, { useState, useEffect } from 'react';

function SendFile() {


    // const sendFileGet = () => {

    //     fetch('http://localhost:5000/save_file')
    //         .then(res => res.json())
    //         .then(res => console.log(res))

    // }

    // const sendFilePost = async () => {

    //     const reqComparison = await fetch(
    //         'http://localhost:5000/save_file_post',
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             method: 'POST',
    //             body: JSON.stringify({ check: 'Проверяем пост запрос на бэк' })
    //         });
    //     const arrSortUserId = await reqComparison.json();
    //     console.log(arrSortUserId)

    // }



    return (
        <>
            {/* <button onClick={() => sendFileGet()}>Проверка бэка get</button>
            <button onClick={() => sendFilePost()}>Проверка бэка post</button> */}

            <form action="http://localhost:5000/save_file_post" method='POST' enctype="multipart/form-data">
                <input type="file" name="ited" />
                <input type="text" name="ited" />
                <input type="submit" />
            </form>
        </>
    )
}

export default SendFile