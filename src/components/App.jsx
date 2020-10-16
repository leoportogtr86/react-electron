import React from 'react'
const electron = window.require('electron')
const { ipcRenderer } = window.require('electron')
const mongoose = window.require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-electron', { useNewUrlParser: true, useUnifiedTopology: true });

export default props => {


    let Teste = mongoose.model('teste', {

        dados: String
    })

    function salvar() {

        let teste = new Teste({

            dados: 'kkkkkkk'
        })

        teste.save().then(() => {


            console.log('dados salvos')



        }).catch((err) => {

            console.log(err)



        })

    }



    //enviando o evento close do app para o processo principal
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

                        <button className="btn btn-danger" onClick={salvar}>Salvar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}