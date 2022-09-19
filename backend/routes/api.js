const express = require("express");

const router = express.Router();

const TimeSheet = require("../model/TS");

router.post("/save", (req, res) => {
  console.log(req.body);
  const data = req.body;

  const newTimeSheet = new TimeSheet(data);
  newTimeSheet.save((error) => {
    if (error) {
      res.status(500).json({ msg: "error data not saved" });
      return;
    }
    return res.status(200).json({ msg: "Data has been saved" });
  });
});

router.get("/", (req, res) => {
  TimeSheet.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error");
    });
});

router.post("/update", (req, res) => {
  const data = req.body;

  TimeSheet.updateOne(
    { _id: data.id },
    {
      $set: {
        rate: data.rate,
        description: data.description,
        time: data.time,
        line_items: data.line_items,
      },
    },
    (error, doc) => {
      if (error) {
        return error;
      }
      res.json(doc);
    }
  );
});

module.exports = router;
