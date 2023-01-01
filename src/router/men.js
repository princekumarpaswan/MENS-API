const express = require("express")
const router = new express.Router()
const MensRanking = require("../models/mens");







router.post("/pmens", async (req, res) => {
    try {
        const addingPlayers = new MensRanking(req.body)
        const insertMens = await addingPlayers.save();
        res.status(201).send(insertMens)

    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/mens", async (req, res) => {
    try {
        const getMen = await MensRanking.find({}).sort({ "ranking": 1 })
        res.status(200).send(getMen)

    } catch (error) {
        res.status(500).send(error)
    }
})

// getting a single player
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.findById({ _id })
        res.status(200).send(getMens)

    } catch (error) {
        res.status(500).send(error)
    }
})

// We are updating data

router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true })
        res.status(200).send(getMens)

    } catch (error) {
        res.status(500).send(error)
    }
})

// we are deleting data

router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.findByIdAndDelete(_id)
        res.status(200).send(getMens)

    } catch (error) {
        res.status(500).send(error)
    }
})




router.get("/", async (req, res) => {
    res.send("Hello from prince");
})

module.exports = router;
