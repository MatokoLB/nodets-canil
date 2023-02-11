import { Request, Response } from "express";

import {Pet} from "../models/pet"
import { createMenuObject } from "../helpers/createManuObject"

export const home = (req: Request, res: Response) => {
    let list =Pet.getALL()

    res.render("pages/page",{
        menu: createMenuObject("all"),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req: Request, res: Response) => {       
    let list= Pet.getFromtype("dog")

    res.render("pages/page",{
        menu: createMenuObject("dog"),
        banner:{
            title:'cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {
    let list= Pet.getFromtype("cat")

    res.render("pages/page",{
        menu: createMenuObject("cat"),
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}
export const fishes = (req: Request, res: Response) => {
    let list= Pet.getFromtype("fish")

    res.render("pages/page",{
        menu: createMenuObject("fish"),
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}