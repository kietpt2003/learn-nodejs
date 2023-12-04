import express from "express";

const configData = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json())
}

export {
    configData
}