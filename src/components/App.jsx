import React from 'react'
const electron = window.require('electron')
const { ipcRenderer } = window.require('electron')

export default props => {



    function close() {

        ipcRenderer.send('close', 'close')



    }

    return (

        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-danger m-5">React com Electron</h1>

                        <p className="text-center">Esta é uma interface de usuário construída com react e electron</p>

                        <button className="btn btn-danger" onClick={close}>Fechar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}