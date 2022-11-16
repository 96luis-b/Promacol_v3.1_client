import { getStorage, createStorage, addStorage, updateStorage, cleanStorage } from './storageTimeCount'
import {listProduct} from '../json/listProduct'

const key = "singleCount"
const key2 = "groupCount"
export const save = (d, value) => {
    let data = JSON.parse(JSON.stringify(d))
    if (getStorage(key) == null) {
        createStorage(key)
        data.production = countZero(data.production)
        addStorage(key, data)
    }
    let pack = getStorage(key)
    for (let i = 0; i < pack.length; i++) {
        if (pack[i].employee.employee_id == data.employee.employee_id) {
            let sizeP = pack[i].production.length
            for (let j = 0; j < sizeP; j++){
                if(pack[i].production[j].prod_id == data.prod_id){
                    let quantity = pack[i].production[j].quantity + value
                    pack[i].production[j].quantity = quantity
                    updateStorage(key, pack)
                    return pack[i].production
                }
            }
        } else if(i == (pack.length -1)){
            data.production = countZero(data.production)
            for (let i = 0; i < data.production.length; i++) {
                if(data.production[i].prod_id == data.prod_id){
                    data.production[i].quantity = data.production[i].quantity + value
                }
            }
            addStorage(key, data)
            return data.production
        }
    }  
}

export const saveGroupCount = (d, value, prod_id) => {
    let data = JSON.parse(JSON.stringify(d))
    data = countZero(data)
    if (getStorage(key2) == null) {
        createStorage(key2)
        updateStorage(key2, listProduct)
    }

    let pack = getStorage(key2)
    let size = data.length
    let arr = []
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < pack.length; j++) {
            if(data[i].prod_id == pack[j].prod_id && prod_id == pack[j].prod_id){
                pack[j].quantity = pack[j].quantity + value
                updateStorage(key2, pack)
            }
        }
    }
    pack = getStorage(key2)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < pack.length; j++) {
            if(data[i].prod_id == pack[j].prod_id){
                data[i].quantity = pack[j].quantity
            }
        }
    }
    return data
}


export const getSingleCount = (employee_id) => {
    let pack = getStorage(key)
    if (pack == null) return
    for (let i = 0; i < pack.length; i++) {
        if (pack[i].employee.employee_id == employee_id) {
            return pack[i].production
        }
    }
    return null
}

export const getGroupCount = (data) => {
    let pack = getStorage(key2)
    if (pack == null) return
    for (let i = 0; i < pack.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (pack[i].prod_id == data[j].prod_id) {
                data[j] = pack[i]
            }
        }
    }
    return data
}

export const deteleCount = () => {
    cleanStorage(key)
    cleanStorage(key2)
}

export const deteleSingleCount = () => {
    cleanStorage(key)
}

export const deteleGroupCount = () => {
    cleanStorage(key2)
}


const countZero = (data) => {
    for (let i = 0; i < data.length; i++) {
        data[i].quantity = 0
    }
    return data
}

