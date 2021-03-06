const BODY_DATA = {
  "generator_info": "Shape definitions generated with PhysicsEditor. Visit https://www.codeandweb.com/physicseditor",
  "recruit-shell": {
    "type": "fromPhysicsEditor",
    "label": "recruit-shell",
    "isStatic": false,
    "fixtures": [
      {
        "label": "outline",
        "density": 0.0048, // масса тела — 100 кг
        "restitution": 0.65,
        "friction": 1,
        "frictionAir": 0.00001,
        "frictionStatic": 100,
        "isSensor": false,
        "vertices": [
          [ { "x":11, "y":125 }, { "x":18, "y":126 }, { "x":160, "y":80 }, { "x":158, "y":72 }, { "x":148, "y":50 }, { "x":122, "y":1 }, { "x":121, "y":1 }, { "x":7, "y":116 } ],
          [ { "x":164, "y":27 }, { "x":157, "y":14 }, { "x":153, "y":13 }, { "x":148, "y":50 }, { "x":153, "y":49 }, { "x":159, "y":43 } ],
          [ { "x":23, "y":134 }, { "x":26, "y":134 }, { "x":160, "y":80 }, { "x":18, "y":126 } ],
          [ { "x":144, "y":6 }, { "x":133, "y":2 }, { "x":122, "y":1 }, { "x":148, "y":50 }, { "x":153, "y":13 } ],
          [ { "x":-2, "y":89 }, { "x":5, "y":115 }, { "x":99, "y":7 }, { "x":62, "y":7 }, { "x":26, "y":23 }, { "x":14, "y":35 }, { "x":5, "y":49 }, { "x":-1, "y":68 } ],
          [ { "x":72, "y":159 }, { "x":96, "y":159 }, { "x":111, "y":155 }, { "x":160, "y":80 }, { "x":26, "y":134 }, { "x":40, "y":146 }, { "x":52, "y":153 } ],
          [ { "x":39, "y":14 }, { "x":26, "y":23 }, { "x":62, "y":7 } ],
          [ { "x":135, "y":142 }, { "x":146, "y":129 }, { "x":154, "y":114 }, { "x":158, "y":100 }, { "x":160, "y":80 }, { "x":111, "y":155 }, { "x":127, "y":147 } ],
          [ { "x":109, "y":3 }, { "x":99, "y":7 }, { "x":5, "y":115 }, { "x":7, "y":116 }, { "x":121, "y":1 } ]
        ]
      },
      {
        "label": "editor",
        "density": 0,
        "isSensor": true,
        "circle": {
          "x": 84.16636883494965,
          "y": 83.24955325242453,
          "radius": 200.69757330019453
        }
      }
    ]
  },
  "fat-shell": {
    "type": "fromPhysicsEditor",
    "label": "fat-shell",
    "isStatic": false,
    "fixtures": [
      {
        "label": "outline",
        "density": 0.015, // масса тела — 100 кг
        "restitution": 0.35,
        "isSensor": false,
        "circle": {
          "x": 0,
          "y": 0,
          "radius": 75
        }
      },
      {
        "label": "editor",
        "density": 0,
        "isSensor": true,
        "circle": {
          "x": 0,
          "y": 0,
          "radius": 200.69757330019453
        }
      }
    ]
  },
  "explosion-shell": {
    "type": "fromPhysicsEditor",
    "label": "explosion-shell",
    "isStatic": false,
    "fixtures": [
      {
        "label": "outline",
        "density": 0.001,
        "restitution": 0.35,
        "friction": 1,
        "frictionAir": 0.00001,
        "frictionStatic": 100,
        "isSensor": false,
        "circle": {
          "x": 0,
          "y": 0,
          "radius": 75
        }
      },
      {
        "label": "editor",
        "density": 0,
        "isSensor": true,
        "circle": {
          "x": 0,
          "y": 0,
          "radius": 200.69757330019453
        }
      }
    ]
  },
  "commissar-1": {
    "type": "fromPhysicsEditor",
    "fixtures": [
      {
        "label": "outline",
        "density": 0.0025, // масса тела — 203 кг
        "restitution": 0.25,
        "friction": 1,
        "frictionAir": 0.00001,
        "frictionStatic": 100,
        "vertices": [
          [ { "x":15, "y":141 }, { "x":34, "y":154 }, { "x":70, "y":5 }, { "x":60, "y":9 }, { "x":5, "y":77 }, { "x":2, "y":82 }, { "x":0, "y":105 }, { "x":5, "y":125 } ],
          [ { "x":22, "y":36 }, { "x":10, "y":57 }, { "x":5, "y":77 }, { "x":60, "y":9 }, { "x":39, "y":21 } ],
          [ { "x":58, "y":212 }, { "x":73, "y":226 }, { "x":86, "y":233 }, { "x":100, "y":237 }, { "x":124, "y":237 }, { "x":151, "y":226 }, { "x":167, "y":211 }, { "x":49, "y":196 } ],
          [ { "x":201, "y":138 }, { "x":212, "y":120 }, { "x":197, "y":139 } ],
          [ { "x":188, "y":147 }, { "x":197, "y":139 }, { "x":212, "y":120 }, { "x":214, "y":112 }, { "x":207, "y":63 }, { "x":155, "y":6 }, { "x":180, "y":151 } ],
          [ { "x":177, "y":21 }, { "x":155, "y":6 }, { "x":207, "y":63 }, { "x":200, "y":47 } ],
          [ { "x":213, "y":83 }, { "x":207, "y":63 }, { "x":214, "y":112 } ],
          [ { "x":138, "y":233 }, { "x":151, "y":226 }, { "x":124, "y":237 } ],
          [ { "x":45, "y":184 }, { "x":49, "y":196 }, { "x":167, "y":211 }, { "x":173, "y":202 }, { "x":180, "y":151 }, { "x":155, "y":6 }, { "x":45, "y":155 } ],
          [ { "x":178, "y":191 }, { "x":181, "y":179 }, { "x":180, "y":151 }, { "x":173, "y":202 } ],
          [ { "x":127, "y":-1 }, { "x":106, "y":-2 }, { "x":105, "y":-2 }, { "x":34, "y":154 }, { "x":36, "y":153 }, { "x":155, "y":6 }, { "x":149, "y":4 } ],
          [ { "x":70, "y":5 }, { "x":34, "y":154 }, { "x":105, "y":-2 } ],
          [ { "x":45, "y":155 }, { "x":155, "y":6 }, { "x":36, "y":153 } ]
        ]
      },
      {
        "label": "editor",
        "isSensor": false,
        "circle": {
          "x": 109.41624120833964,
          "y": 92.4603912388308,
          "radius": 88.58534820378804
        }
      }
    ]
  }
};

export default BODY_DATA;