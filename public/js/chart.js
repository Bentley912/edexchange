var chart = bb.generate({
  "data": {
    "columns": [
      [
        "Experts",
        15,
        5,
        5,
       
      ],
      [
        "Educators",
        25,
        15,
        10,
       
      ]
    ],
    "type": "bar"
  },
  "bar": {
    "width": {
      "ratio": 0.5
    }
  },
"axis": {
    "y": {
      "max": 30,
      "min": 0
    }
  },

  "axis": {
    "x": {
      "type": "category",
      "categories": [
        "Entrepreneurhsip",
        "Coding",
        "Finance",
       
      ]
    }
  },
  "bindto": "#chart"
});